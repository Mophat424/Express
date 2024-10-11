"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
const router = (0, express_1.Router)();
// Define product routes
router.get('/', productController_1.getProducts); // Get all products
router.post('/', productController_1.addProduct); // Add a new product
router.delete('/:id', productController_1.deleteProduct); // Delete a product by ID
exports.default = router;
