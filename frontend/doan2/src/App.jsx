import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Container/HomePage/HomePage';
import AdminPage from './Container/AdminPage/AdminPage';
import ProductDetail from './Component/User/ProductDetail/ProductDetail';
import ProductEdit from './Component/Admin/Product/Edit/ProductEdit'
import EditCategory from './Component/Admin/Category/Edit/EditCategory';
import EditBrand from './Component/Admin/Brand/Edit/EditBrand';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/Admin" element={<AdminPage />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/admin/product/:id' element={<ProductEdit />}/>
          <Route path='/admin/category/:id' element={<EditCategory /> }/>
          <Route path='/admin/brand/:id' element={<EditBrand />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
