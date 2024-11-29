import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductEdit.css';

const EditProduct = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/products/${id}`;
  console.log("Request URL:", url);

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    nameProduct: '',
    description: '',
    firstprice: '',
    lastprice: '',
    imageProduct: '',
    quantity: ''
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError(`Error fetching product data: ${err.response?.data?.message || err.message}`);
        setLoading(false);
        console.error('Error fetching product data:', err);
      }
    };


    fetchProduct();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imageProduct" && files.length > 0) {
      setProduct({ ...product, imageProduct: files[0] });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
  
    for (let key in product) {
      formData.append(key, product[key]);
    }
  
    console.log('Submitting to URL:', `http://localhost:5000/products/${id}`);
    console.log('Form data:', formData);
  
    try {
      const response = await axios.put(`http://localhost:5000/products/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Product updated:', response.data);
      navigate('/admin/products');
    } catch (err) {
      console.error('Error updating product:', err);
      setError(err.response?.data?.message || 'Error updating product');
    }
  };
  


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-product-container">
      <h1>Edit Product</h1>
      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nameProduct">Product Name:</label>
          <input
            type="text"
            id="nameProduct"
            name="nameProduct"
            value={product.nameProduct}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="firstprice">First Price:</label>
          <input
            type="number"
            id="firstprice"
            name="firstprice"
            value={product.firstprice}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastprice">Last Price:</label>
          <input
            type="number"
            id="lastprice"
            name="lastprice"
            value={product.lastprice}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={product.quantity}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="imageProduct">Product Image:</label>
          <input
            type="file"
            id="imageProduct"
            name="imageProduct"
            onChange={handleInputChange}
            accept="image/*"
            multiple
          />
        </div>
      
        <button type="submit" className="btn-submit">Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;
