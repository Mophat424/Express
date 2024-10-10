"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const xata_1 = require("./xata");
const xata = (0, xata_1.getXataClient)();
async function addProduct() {
    try {
        const newProduct = await xata.db.products.create({
            Name: 'Earphones',
            Description: 'Wireless black',
            Price: 1500,
            Quantity: 1
        });
        console.log('Product added:', newProduct);
    }
    catch (error) {
        console.error('Error adding product:', error);
    }
}
addProduct();
const deleteProductA = async () => {
    const xata = (0, xata_1.getXataClient)();
    try {
        // Delete Product A by its xata_id
        const record = await xata.db.products.delete("rec_cs31vunae1bq9a91pptg");
        console.log(`Product A has been deleted:`, record);
    }
    catch (error) {
        console.error("Error deleting Product A:", error);
    }
};
deleteProductA();
const fetchProducts = async () => {
    const xata = (0, xata_1.getXataClient)();
    try {
        // Fetch all products from the products table
        const products = await xata.db.products.getAll();
        console.log("Fetched Products:", products);
    }
    catch (error) {
        console.error("Error fetching products:", error);
    }
};
fetchProducts();
