import React from 'react'
import DataUser from '../../../User/Data/DataUser'
import './AccountManager.css'
const AccountManager = () => {
  return (
    <div id='AccountManager'>
      <div className='adminaccount-manager'>
      <h1 className='Title-admin'>Quản Lý Tài Khoản Người Dùng</h1>
        <table border={1} className='admin-account-boder'>
          <thead className='head-user-boder'>
            <tr>
              <th>Tên Người Dùng</th>
              <th>Tài Khoản</th>
              <th>Mật Khẩu</th>
              <th>Số Điện Thoại</th>
              <th>Chỉnh Sửa</th>
            </tr>
          </thead>
          <tbody className='body-user-boder'>
            {DataUser.map((data) =>
              <tr key={data.id}>
                <td>{data.userName}</td>
                <td>{data.account}</td>
                <td>{data.password}</td>
                <td>{data.phone}</td>
                <td>
                  <button className='delete-account'>Xóa</button>
                </td>
              </tr>)}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AccountManager