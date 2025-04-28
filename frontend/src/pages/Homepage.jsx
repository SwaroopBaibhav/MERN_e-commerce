import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard';
import { DBgetAllProducts } from '../controller/state.controller';
import store from '../zstnd/product.store';
import Masonry from '@mui/lab/Masonry';

function Homepage() {

    const products = store((state) => state.products);

    useEffect(() => {
        const loadProduct = async () => {
            try {
                await DBgetAllProducts();
            } catch (error) {
                console.log('homepage error: ', error);
            }
        };
        loadProduct();
    }, []);

    
    return (
    <div className="p-5">
        <Masonry
        >
            {products.map((e) => (
                <ProductCard key={e._id} product={e} />
            ))}
        </Masonry>
    </div>
    )
}

export default Homepage