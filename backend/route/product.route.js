import express from 'express';
import { addProduct, getAllProduct, updateProduct, deleteProduct } from '../controller/product.controller.js';

const router = express.Router();

router.post('/', addProduct);
router.get('/', getAllProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;