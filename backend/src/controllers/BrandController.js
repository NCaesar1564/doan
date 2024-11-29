const Brand = require('../models/Brand');

// Lấy danh sách thương hiệu
exports.getBrands = async (req, res) => {
    try {
        const brands = await Brand.find(); // Lấy tất cả thương hiệu
        res.status(200).json(brands); // Trả về danh sách thương hiệu
    } catch (err) {
        res.status(500).json({ message: 'Error fetching brands', error: err.message });
    }
};
// Thêm thương hiệu
exports.addBrand = async (req, res) => {
    const { nameBrand, imageBrand } = req.body;

    try {
        const brand = new Brand({ nameBrand, imageBrand });
        await brand.save(); // Lưu thương hiệu mới
        res.status(201).json({ message: 'Brand added successfully', brand });
    } catch (err) {
        res.status(400).json({ message: 'Error adding brand', error: err.message });
    }
};
// Sửa thương hiệu
exports.editBrand = async (req, res) => {
    const { id } = req.params;
    const { nameBrand, imageBrand } = req.body;

    try {
        const updatedBrand = await Brand.findByIdAndUpdate(
            id,
            { nameBrand, imageBrand },
            { new: true, runValidators: true } // Trả về thương hiệu đã sửa
        );

        if (!updatedBrand) {
            return res.status(404).json({ message: 'Brand not found' });
        }

        res.status(200).json({ message: 'Brand updated successfully', brand: updatedBrand });
    } catch (err) {
        res.status(400).json({ message: 'Error updating brand', error: err.message });
    }
};
// Xóa thương hiệu
exports.deleteBrand = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedBrand = await Brand.findByIdAndDelete(id);
  
      if (!deletedBrand) {
        return res.status(404).json({ message: 'Brand not found' });
      }
  
      res.status(200).json({ message: 'Brand deleted successfully', brand: deletedBrand });
    } catch (err) {
      res.status(400).json({ message: 'Error deleting brand', error: err.message });
    }
  };
  