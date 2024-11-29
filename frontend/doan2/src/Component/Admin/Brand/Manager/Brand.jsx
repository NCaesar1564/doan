import React, { useState } from 'react'
import './Brand.css'
import DataBrand from '../../../User/Data/DataBrand'
import { useNavigate } from 'react-router-dom'
const Brand = () => {
  const navigate = useNavigate();
  return (
    <div id='Brand'>
      <h1 className='Title-admin'>Thương Hiệu</h1>
      <table border={1} className='border-brand-admin'>
        <thead className='head-list-brand'>
          <tr>
            <th className='logo-brand-column'>Logo thương Hiệu</th>
            <th className='name-brand-colum'>Tên thương Hiệu</th>
            <th className='edit-brand-colum'>Chỉnh Sửa</th>
          </tr>
        </thead>
        <tbody className='body-list-brand'>
          {DataBrand.map((data) =>
            <tr key={data.id}>
              <td>
                <img src={data.imageBrand} alt="logo" />
              </td>
              <td>{data.nameBrand}</td>
              <td className='side-button'>
                <div className='edit-product-button'>
                  <div onClick={() => navigate(`/admin/brand/${data.id}`)} className='edit-brand-admin'>Sửa</div>
                  <div className='space'>space</div>
                  <div className='delete-brand-admin'>Xóa</div>
                </div>
              </td>
            </tr>
          )}

        </tbody>
      </table>
    </div>
  )
}

export default Brand