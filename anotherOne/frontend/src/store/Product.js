// global state and functions

import { data } from 'react-router-dom';
import { create } from 'zustand';

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => {set({products})},
    createProduct: async (newProduct) => {
        if(!newProduct.name || !newProduct.price || !newProduct.image){
            return {success: false, message: 'Please fill all fields.'}
        }
        const response = await fetch('/products',
            {method:"POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body:JSON.stringify(newProduct)
        })
        const data = await response.json();
        set((state) => ({products:[...state.products, data.data]}));
        return {success: true, message: 'Product created successfully.'};
    },
    fetchProducts: async () => {
        const res = await fetch('/products',{
            method: 'GET'
        })
        const data = await res.json();
        set({products: data.products});
    },
    deleteProducts: async (id) => {
        const response = await fetch(`/products/${id}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        if (!data.success) return {success: false, message: data.message};
        
        set(state => ({products: state.products.filter((e) => e._id !== id)}));
        return {success: true, message: data.message};
    },
    updateProduct: async (id, updatedProduct) => {
        const response = await fetch(`products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        });
        const data = response.json();
        if (!data.success) return {success: false, message: data.message};
        else{
            set(state => ({products: state.products.forEach((e) => e._id == id ? data.data : e)}))
        }
    }
}));