import Product from '../models/product.model.js'
import mongoose from 'mongoose';

export const addProduct = async (req, res) => {
    const item = req.body;
    if (!item.name || !item.price || !item.image){
        return res.status(500).json({success: false, message: 'Fill all the fields'})
    }

    const newProduct = new Product(item);
    try {
        await newProduct.save();
        return res.status(200).json({success: true, message: 'Product added successfully', data: newProduct})
    } catch (error) {
        return res.status(500).json({success: false, message: 'Error while adding product'})
    }
};

export const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find({});
        return res.status(200).json({success: true, message: 'All product fetched successfully', data: products})
    } catch (error) {
        return res.status(500).json({success: false, message: 'Error fetching products'})
    }
};

export const updateProduct = async (req, res) => {
    const {id} = req.params;
    const item = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(500).json({success: false, message: 'Invalid Id'})
    }else{
        try {
            const updatedProduct = await Product.findByIdAndUpdate(id, item, {new: true});
            return res.status(200).json({success: true, message: 'Product updated successfully', data:updatedProduct})
        } catch (error) {
            return res.status(500).json({success: false, message: 'Product updation error'})
        }
    }
};

export const deleteProduct = async (req, res) => {
    const {id} = req.params;
    
    try {
        const response = await Product.findByIdAndDelete(id);
        return res.status(200).json({success: true, message: 'Product deleted successfully'})
    } catch (error) {
        return res.status(500).json({success: false, message: 'Product deletion error'})
    }
};