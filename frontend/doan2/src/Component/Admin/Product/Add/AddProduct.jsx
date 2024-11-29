import './AddProduct.css'
import React, { useState } from 'react'
import DataCategory from '../../../User/Data/DataCategory'
import DataBrand from '../../../User/Data/DataBrand'
const AddProduct = () => {
  
  return (
    <div id='AddProduct'>
      <h1 className='Title-admin'>Thêm Sản Phẩm</h1>

      <div className='addproduct-content'>
        <input type="text" placeholder='Tên sản phẩm' required className='addproduct-input' />
        <input type="text" placeholder='Giá ($)' className='addproduct-input' />
        <input type="text" placeholder='Giảm giá (%)' className='addproduct-input' />
        <input type="number" placeholder='Số lượng trong kho' className='addproduct-input' />
        <select className="addproduct-input">
          {DataBrand.map((data) =>
            <option key={data.id} value={data.nameBrand}>
              {data.nameBrand}
            </option>
          )}
        </select>
        <select className='addproduct-input'>
          {DataCategory.map((data) =>
            <option key={data.id} value={data.categoryName}>
              {data.categoryName}
            </option>
          )}
        </select>
      <textarea type="text" placeholder='Mô tả' className='addproduct-description' />
        <div className='addproduct-image'>
          <label htmlFor="addproduct-image" className='addproduct-image-label'>Hình ảnh: </label>
          <input type="file" placeholder='Tải ảnh lên' multiple accept='image/*' id='addproduct-image' />
        </div>
        <div className='addproduct-submit'>
          <button>Thêm</button>{/* onclick */}
        </div>
      </div>

    </div>
  )
}

export default AddProduct