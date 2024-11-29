import React from 'react'
import './AddBrand.css'
const AddBrand = () => {
  return (
    <div id='AddBrand'>
      <h1 className='Title-admin'>Thêm Thương Hiệu</h1>
      <div className='addbrand-content'>
        <input type="text" className='addbrand-input' placeholder='Tên Thương Hiệu'/>
        <div className='add-brand-image'>
          <label htmlFor="addproduct-image" className='addbrand-image-label'>Hình Ảnh</label>
          <input type="file" accept='image/*' multiple id='addproduct-image' />
        </div>
        <div className='addbrand-submit '>
          <button >Thêm</button>{/* onclick */}
        </div>
      </div>
    </div>
  )
}

export default AddBrand