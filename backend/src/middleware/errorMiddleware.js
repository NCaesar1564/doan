// Middleware xử lý lỗi
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Có lỗi xảy ra', error: err.message });
  };
  
  module.exports = { errorHandler };
  