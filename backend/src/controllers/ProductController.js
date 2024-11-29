const Product = require('../models/Product');

// Lấy tất cả sản phẩm
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find(); 
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products', error: err.message });
  }
};

// Lấy sản phẩm theo ID
exports.getProductById = async (req, res) => {
  const { id } = req.params; // Lấy id từ URL params

  try {
    const product = await Product.findById(id); // Tìm sản phẩm theo ID
    if (!product) {
      return res.status(404).json({ message: 'Product not found' }); // Nếu không tìm thấy sản phẩm
    }

    res.status(200).json(product); // Trả về thông tin sản phẩm
  } catch (err) {
    res.status(500).json({ message: 'Error fetching product', error: err.message }); // Lỗi server
  }
};

// Thêm sản phẩm mới
exports.addProduct = async (req, res) => {
  const { nameProduct, description, firstprice, lastprice, imageProduct, quantity } = req.body;

  try {
    const product = new Product({ nameProduct, description, firstprice, lastprice, imageProduct, quantity });

    // Lưu sản phẩm mới vào database
    await product.save();

    res.status(201).json(product); // Trả về sản phẩm vừa tạo
  } catch (err) {
    res.status(400).json({ message: 'Error adding product', error: err.message }); // Lỗi khi thêm sản phẩm
  }
};

// Cập nhật thông tin sản phẩm theo ID
exports.editProduct = async (req, res) => {
  const { id } = req.params;
  const { nameProduct, description, firstprice, lastprice, imageProduct, quantity } = req.body;

  try {
    // Tìm sản phẩm theo ID và cập nhật
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { nameProduct, description, firstprice, lastprice, imageProduct, quantity },
      { new: true, runValidators: true } // Lấy dữ liệu mới và kiểm tra các validator
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' }); // Nếu không tìm thấy sản phẩm
    }

    res.status(200).json(updatedProduct); // Trả về sản phẩm đã cập nhật
  } catch (err) {
    res.status(400).json({ message: 'Error updating product', error: err.message }); // Lỗi khi cập nhật
  }
};

// Xóa sản phẩm theo ID
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    // Tìm sản phẩm và xóa
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' }); // Nếu không tìm thấy sản phẩm
    }

    res.status(200).json({ message: 'Product deleted successfully', product: deletedProduct }); // Trả về sản phẩm đã xóa
  } catch (err) {
    res.status(400).json({ message: 'Error deleting product', error: err.message }); // Lỗi khi xóa sản phẩm
  }
};
