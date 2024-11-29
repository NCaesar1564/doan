import React, { useState } from 'react'
import './Sidebar.css'
import { Link } from 'react-scroll'
import { IoIosArrowDown } from 'react-icons/io';
const Sidebar = () => {
  const [showManager, setShowManager] = useState(false);
  const [showAdd, setShowAdd] = useState(false)
  const showManagerButton = () => {
    setShowManager(!showManager);
  }
  const showAddButton = () =>{
    setShowAdd(!showAdd);
  }
  return (
    <div className='Sidebar' id='Sidebar'>
      <h1 className='Titile'>Admin</h1>
      <button className='Customize manager-button' onClick={showManagerButton}>
        <div>Quản Lý</div>
        <div><IoIosArrowDown /></div>
      </button>
      <div className={`dropdown-manager ${showManager ? 'show-manager' : ''}`}>
        <Link to='ProductAdmin' className='Customize'>Quản Lý Sản Phẩm</Link>
        <Link to='Category' className='Customize'>Quản Lý Danh Mục</Link>
        <Link to='CartManager' className='Customize'>Quản Lý Đơn Hàng</Link>
        <Link to='Brand' className='Customize'>Quản Lý Thương hiệu</Link>
        <Link to='AccountManager' className='Customize'>Quản Lý Tài Khoản</Link>
      </div>
      <button className='Customize add-button' onClick={showAddButton}>
        <div>Thêm</div>
        <div><IoIosArrowDown /></div>
      </button>
      <div className={`dropdown-add ${showAdd ? 'show-add' : ''}`}>
        <Link to='AddProduct' className='Customize'>Thêm Sản Phẩm</Link>
        <Link to='AddCategory' className='Customize'>Thêm Danh Mục</Link>
        <Link to='AddBrand' className='Customize'>Thêm Thương Hiệu</Link>
      </div>
    </div>
  )
}

export default Sidebar