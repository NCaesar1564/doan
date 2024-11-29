import React from 'react'
import './CartManager.css'
import { IoMdArrowDropdown } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
const CartManager = () => {
  const Navigate = useNavigate();
  
  return (
    <div id='CartManager'>
      <div className='CartManager'>
        <h1 className='Title-admin'>Đơn Hàng</h1>
        <table border={1} className='admincart-border'>
          <thead>
            <tr className='admincart-head-border'>
              <th className='admincart-client-name'>Tên Khách Hàng</th>
              <th className='admincart-client-phone'>Số điện thoại</th>
              <th className='admincart-note'>Ghi chú</th>
              <th className='admincart-total'>Thành Tiền</th>
              <th className='admincart-state'>Trạng Thái</th>
              <th className='admincart-cart-detail'>Chỉnh Sửa</th>
            </tr>
          </thead>
          <tbody className='admincart-border-content'>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th>
                <div className='admincart-cart-detail-content' >
                  <div>Chi tiết</div>
                  <div><IoMdArrowDropdown /></div>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CartManager