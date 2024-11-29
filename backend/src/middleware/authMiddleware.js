const checkAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    return next(); // Người dùng là admin, tiếp tục với route
  } else {
    return res.status(403).json({ message: 'Không có quyền truy cập' }); // Không có quyền
  }
};

module.exports = { checkAdmin };
