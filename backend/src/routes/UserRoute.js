const express = require('express');
const { registerUser, loginUser, authMiddleware, adminMiddleware } = require('../controllers/userController');
const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.delete('/:id', authMiddleware, adminMiddleware, async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting user', error: err.message });
  }
});

module.exports = router;
