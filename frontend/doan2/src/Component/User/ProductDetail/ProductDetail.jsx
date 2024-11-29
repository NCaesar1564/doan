import React, { useState } from 'react';
import HomePage from '../../../Container/HomePage/HomePage'
import DataProduct from '../Data/DataProduct';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import { Button } from 'react-scroll';

const ProductDetail = () => {
  const { id } = useParams();
  const product = DataProduct.find((product) => product.id === id);

  const [currentImage, setCurrentImage] = useState(product.productImage[0]);

  const ImageHover = (image) => {
    setCurrentImage(image);
  };
  const SalePrice = (product.productPrice * (100-product.productSale))/100

  return (
    <div className='ProductDetail' id='ProductDetail'>
      <div className="Image-Product">
        <div className="product-image">
          <img src={currentImage} alt={product.productName} />
        </div>
        <div className="list-product-image">
          {product.productImage && product.productImage.length > 0 && product.productImage.map((img, index) => (
            <button  onClick={() => ImageHover(img)}>
              <img key={index}
              src={img}
              alt={product.description}
              className='img-in-list'
             
            /></button>
          ))}
        </div>
      </div>
      <div className="Information-Product">
        <h1 className="product-name">{product.productName}</h1>
        <h2 className="product-price" style={product.productSale && product.SalePrice !== 0 ? {textDecoration: 'line-through', color:'red'} : {textDecoration:'none'}}>Giá: {product.productPrice.toLocaleString()}$</h2>
        <h2 className="product-sale" style={!product.productSale && product.productSale === 0 ? { display: 'none' } : { display: 'flex', fontWeight:'bold'}}>Sale: {SalePrice}$</h2>
        <h3 className="product-description">{product.description}</h3>
        <div className='button-product-detail'>
          <button className='add-to-cart-button'>Add to Cart</button>
          <a href="/" className='back-to-home-button'>
            <div>Back To Home</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
