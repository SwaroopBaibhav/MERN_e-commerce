import Product from "../models/products.model.js";
import mongoose from 'mongoose';

export const addProducts = async(req, res) => {
    const product = req.body; // user will send this data.

    if(!product.name || !product.price || !product.image){
        res.status(400).json({success: false, message: 'Please provide all fields'})
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({message: 'Data uploaded to database.'});
    } catch (error) {
        console.log('Error in creating product:', error);
        res.status(500).json({success: false, message: 'Server error'});
    }
};


export const getAllProducts = async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({message: 'Successfully fetched all products', products});
    } catch (error) {
        res.status(500).json({success: false, message: 'Error fetching all products'});
    }
};


export const updateProducts = async(req, res) => {
    const {id} = req.params;
    const product = req.body;

    // handling false (non existing) id
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({success: false, message: "Invalid Product ID"});
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true})   ;
        res.status(200).json({success: true, message: 'Product updated', data: updatedProduct}) 
    } catch (error) {
        res.status(500).json({success: false, message: 'Error updaing the product'});
    }
};


export const deleteProducts = async(req, res) => {
    const {id} = req.params;
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product deleted"})
    } catch (error) {
        res.status(500).json({success: false, message: 'Error deleting product'});
    }
};