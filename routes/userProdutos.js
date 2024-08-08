import express from "express";
import productById from '../src/controllers/product/productById.js';
import createProduct from '../src/controllers/product/createProduct.js';
import editProduct from '../src/controllers/product/editProduct.js';
import editNameProduct from '../src/controllers/product/editNameProduct.js';
import deleteProduct from '../src/controllers/product/deleteProduct.js';

const produtos = express.Router();

produtos.get('/', productById);
produtos.post('/', createProduct);
produtos.put('/', editProduct);
produtos.patch('/', editNameProduct);
produtos.delete('/', deleteProduct);

 

export default produtos;