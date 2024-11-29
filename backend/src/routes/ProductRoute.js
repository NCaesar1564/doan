const express = require('express');
const {
  getProducts,
  getProductById,
  addProduct,
  editProduct,
  deleteProduct,
  searchProducts,
  getPaginatedProducts,
} = require('../controllers/ProductController');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

const router = express.Router();

router.get('/', getProducts);

router.get('/:id', getProductById);

router.get('/search', searchProducts);

router.post('/', authMiddleware, adminMiddleware, addProduct);

router.put('/:id', authMiddleware, adminMiddleware, editProduct);

router.delete('/:id', authMiddleware, adminMiddleware, deleteProduct);

module.exports = router;
