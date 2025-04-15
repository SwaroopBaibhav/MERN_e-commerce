import store from "../zstnd/product.store.js";

export const DBaddProduct = async(item) => {
    const response = await fetch('http://localhost:3000/products',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(item)
    });

    const data = await response.json();
    if(data.success){
        store.getState().addProduct(data.data);
        console.log(data.message);
        return data;
    } else {
        console.log(data.message);
    }
};

export const DBgetAllProducts = async() => {
    const response = await fetch('http://localhost:3000/products', {
        method: 'GET'
    });
    const data = await response.json();
    if (data.success){
        store.getState().setProduct(data.data);
        return data;
    }
    console.log(data.message);
};

export const DBupdateProducts = async (id, item) => {
    const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(item)
    });

    const data = await response.json();
    if (data.success){
        store.getState().updateProduct(id, data.data);
        console.log(data.message);
        return data;
    } else {
        console.log(data.message);
    }
};

export const DBdeleteproducts = async (id) => {
    const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE'
    });

    const data = await response.json();
    if (data.success){
        store.getState().deleteProduct(id);
        console.log(data.message);
        return data;
    } else {
        console.log(data.message);
    }
};
