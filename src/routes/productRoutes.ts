import { Router } from 'express';
import { getProducts, addProduct, deleteProduct } from '../controllers/productController';

const router = Router();

// Define product routes
router.get('/', getProducts);       // Get all products
router.post('/', addProduct);        // Add a new product
router.delete('/:id', deleteProduct); // Delete a product by ID

export default router;
