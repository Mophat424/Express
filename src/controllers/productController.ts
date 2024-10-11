import { Request, Response } from 'express';
import { getXataClient } from '../xata'; // Xata client

const xata = getXataClient();

// Get all products
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await xata.db.products.getAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
};

// Add a new product
export const addProduct = async (req: Request, res: Response) => {
  try {
    const { Name, Description, Price, Quantity } = req.body;
    const newProduct = await xata.db.products.create({
      Name,
      Description,
      Price,
      Quantity,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error adding product' });
  }
};

// Delete a product
export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const record = await xata.db.products.delete(id);
    res.json({ message: `Product ${id} has been deleted`, record });
  } catch (error) {
    res.status(500).json({ message: `Error deleting product ${id}` });
  }
};
