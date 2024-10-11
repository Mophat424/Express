"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.addProduct = exports.getProducts = void 0;
const xata_1 = require("../xata"); // Xata client
const xata = (0, xata_1.getXataClient)();
// Get all products
const getProducts = async (req, res) => {
    try {
        const products = await xata.db.products.getAll();
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching products' });
    }
};
exports.getProducts = getProducts;
// Add a new product
const addProduct = async (req, res) => {
    try {
        const { Name, Description, Price, Quantity } = req.body;
        const newProduct = await xata.db.products.create({
            Name,
            Description,
            Price,
            Quantity,
        });
        res.status(201).json(newProduct);
    }
    catch (error) {
        res.status(500).json({ message: 'Error adding product' });
    }
};
exports.addProduct = addProduct;
// Delete a product
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const record = await xata.db.products.delete(id);
        res.json({ message: `Product ${id} has been deleted`, record });
    }
    catch (error) {
        res.status(500).json({ message: `Error deleting product ${id}` });
    }
};
exports.deleteProduct = deleteProduct;
