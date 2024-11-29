// src/routes/BrandRoute.js

const express = require('express');
const router = express.Router();
const BrandController = require('../controllers/BrandController');

// Route lấy tất cả Brand
router.get('/', BrandController.getBrands);

// Route thêm Brand mới
router.post('/', BrandController.addBrand);

module.exports = router;
