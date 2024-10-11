import 'dotenv/config';
import { getXataClient } from './xata'; 

const xata = getXataClient();

async function addProduct() {
  try {
    const newProduct = await xata.db.products.create({
      Name: 'Earphones',
      Description: 'Wireless black',
      Price: 1500,
      Quantity: 1
    });
    console.log('Product added:', newProduct);
  } catch (error) {
    console.error('Error adding product:', error);
  }
  
}

addProduct();



const deleteProductA = async () => {
    const xata = getXataClient();

  try {
    
    const record = await xata.db.products.delete("rec_cs31vunae1bq9a91pptg");
    console.log(`Product A has been deleted:`, record);
  } catch (error) {
    console.error("Error deleting Product A:", error);
  }
};

deleteProductA();

const fetchProducts = async () => {
  const xata = getXataClient();
  try {
    // Fetch all products from the products table
    const products = await xata.db.products.getAll();
    
    console.log("Fetched Products:", products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

fetchProducts();


async function updateProduct(productId: string, updatedData: { Name?: string; Description?: string; Price?: number; Quantity?: number }) {
  try {
    const updatedProduct = await xata.db.products.update(productId, updatedData);
    console.log('Product updated:', updatedProduct);
  } catch (error) {
    console.error(`Error updating product with ID ${productId}:`, error);
  }
}
    