// Middleware kiểm tra dữ liệu đầu vào
const validateProduct = (req, res, next) => {
    const { name, imageProduct, firstprice, lastprice, nameBrand, nameCategory } = req.body;
    
    if (!name || !imageProduct || !firstprice || !lastprice || !nameBrand || !nameCategory) {
      return res.status(400).json({ message: 'Thiếu thông tin cần thiết trong yêu cầu' });
    }
    
    next(); // Nếu dữ liệu hợp lệ, tiếp tục với route handler
  };
  
  module.exports = { validateProduct };
  