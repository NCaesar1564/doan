import React from 'react'
import ProductAdmin from '../../Component/Admin/Product/Manager/ProductAdmin'
import './AdminPage.css'
import Sidebar from '../../Component/Admin/Sidebar/Sidebar'
import Category from '../../Component/Admin/Category/Manager/Category'
import AddCategory from '../../Component/Admin/Category/Add/AddCategory'
import AddProduct from '../../Component/Admin/Product/Add/AddProduct'
import AccountManager from '../../Component/Admin/Account/Manager/AccountManager'
import AddBrand from '../../Component/Admin/Brand/Add/AddBrand'
import CartManager from '../../Component/Admin/AdminCart/CartManager'
import Brand from '../../Component/Admin/Brand/Manager/Brand'
const AdminPage = () => {
  return (
    <div className='AdminPage' id='Admin'>
      {/* sidebar */}
      <div className='siderbarAdmin'>
        <Sidebar />
      </div>
      <div className='ContentAdmin'>
        {/* Manager */}
        <div className='productAdmin'>
          <ProductAdmin />
        </div>
        <div className='categoryAdmin'>
          <Category />
        </div>
        <div className='AccountAdmin'>
          <AccountManager />
        </div>
        <div className='CartAdmin'>
          <CartManager />
        </div>
        <div className='brandAdmin'>
          <Brand />
        </div>
        {/* Add */}
        <div className='addProductAdmin'>
          <AddProduct />
        </div>
        <div className='addCategoryAdmin'>
          <AddCategory />
        </div>
        <div className='addBrandAdmin'> 
          <AddBrand />
        </div>
      </div>
    </div>
  )
}

export default AdminPage