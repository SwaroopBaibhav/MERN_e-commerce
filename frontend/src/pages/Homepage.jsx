import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard';
import { DBgetAllProducts } from '../controller/state.controller';
import store from '../zstnd/product.store';

function Homepage() {

    const products = store((state) => state.products);

    useEffect(() => {
        const loadProduct = async () => {
            try {
                await DBgetAllProducts();
            } catch (error) {
                
            }
        };
        loadProduct();
    }, []);

    
    return (
    <div className='flex p-5 gap-8'>
        {products.map((e) => (
            <ProductCard key={e._id} product={e} />
        ))}
    </div>
    )
}

export default Homepage