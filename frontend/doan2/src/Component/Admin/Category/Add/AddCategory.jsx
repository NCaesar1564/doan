import React from 'react'
import './AddCategory.css'
const AddCategory = () => {
  return (
    <div id='AddCategory'>
      <h1 className='Title-admin'>Thêm Danh Mục</h1>
      <div className='addcategory-content'>
        <input type="text" placeholder='Tên Danh Mục' required className='addcategory-input' />
        <div className='addcategory-submit'>
          <button>Thêm</button>{/* onclick */}
        </div>
      </div>
    </div>
  )
}

export default AddCategory