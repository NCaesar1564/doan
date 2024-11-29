import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductAdmin.css';

const ProductAdmin = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [confirm, setConfirm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const {id} = useParams();
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('http://localhost:5000/products');
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };

      fetchProducts();
    }, []);

  const deleteButton = (product) => {
    setSelectedProduct(product);
    setConfirm(true);
  };
  
  // Xác nhận xóa sản phẩm
  const confirmDelete = async () => {
    if (selectedProduct) {
      try {
        await axios.delete(`http://localhost:5000/products/${selectedProduct._id}`);
        setProducts(products.filter((p) => p._id !== selectedProduct._id));
        setConfirm(false);
        setSelectedProduct(null);
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  // Hủy thao tác xóa và đóng hộp thoại
  const cancelDelete = () => {
    setConfirm(false);
    setSelectedProduct(null);
  };
  
  return (
    <div id='ProductAdmin'>
      <div className='ProductAdmin'>
        <h1 className='Title-admin'>Sản phẩm</h1>
        <table border={1} className='border-product-admin'>
          <thead>
            <tr className='head-border-product-admin'>
              <th style={{ height: 50, backgroundColor: 'lightgray' }}>Hình ảnh</th>
              <th style={{ height: 50, backgroundColor: 'lightgray' }}>Tên sản phẩm</th>
              <th style={{ height: 50, backgroundColor: 'lightgray' }}>Số lượng</th>
              <th style={{ height: 50, backgroundColor: 'lightgray' }}>Giá ($)</th>
              <th style={{ height: 50, backgroundColor: 'lightgray' }}>Giảm Giá (%)</th>
              <th style={{ height: 50, backgroundColor: 'lightgray' }}>Chỉnh sửa</th>
            </tr>
          </thead>
          <tbody>
            {products.map((data) => (
              <tr key={data._id} className='body-boder-product-admin'>
                <td>
                  <img src={data.imageProduct[0]} alt={data.nameProduct} width={200} height={175} />
                </td>
                <td>{data.nameProduct}</td>
                <td>{data.quantity}</td>
                <td>{data.lastprice}$</td>
                <td>
                  {((1 - data.lastprice / data.firstprice) * 100).toFixed(0)}%
                </td>
                <td className='side-button'>
                  <div className='edit-product-button'>
                    <div onClick={() => navigate(`/admin/product/${data._id}`)} className='edit-product-admin'>Sửa</div>
                    <div className='space'>space</div>
                    <div onClick={() => deleteButton(data)} className='delete-product-admin'>Xóa</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {confirm && (
          <div className="confirm-delete">
            <div>
              <p>Bạn có chắc muốn xóa sản phẩm "{selectedProduct?.nameProduct}" không?</p>
              <div className='button-confirm-delete'>
                <button onClick={confirmDelete} className='delete'>Xóa</button>
                <div className='space'> space</div>
                <button onClick={cancelDelete} className='no-delete'>Không</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductAdmin;
