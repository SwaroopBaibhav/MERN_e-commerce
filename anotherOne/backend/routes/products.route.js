import express from 'express'
import { addProducts, deleteProducts, getAllProducts, updateProducts } from '../controller/products.controller.js';

const router = express.Router();


router.get('/', getAllProducts);

router.post('/', addProducts);

router.put('/:id', updateProducts);

router.delete('/:id', deleteProducts);


export default router;