import React, { useState } from 'react'
import DataCategory from '../../../User/Data/DataCategory'
import { useNavigate } from 'react-router-dom'
import './Category.css'
const Category = () => {
  //hàm vào page sửa
  const navigate = useNavigate();
  //hàm xóa
  const [category, setCategory] = useState(DataCategory);
  const [confirm, setConfirm] = useState(false);
  const [selectCategory, setSelectCategory] = useState(null);
  const deleteButton = (category) => {
    setSelectCategory(category);
    setConfirm(true);
  };
  const confirmDelete = () => {
    if (selectCategory) {
      setCategory(category.filter((c) => c.id !== selectCategory.id));
      setConfirm(false);
      setSelectCategory(null);
    }
  };
  const cancelDelete = () => {
    setConfirm(false);
    setSelectCategory(null);
  };
  return (
    <div id='Category'>
      <div className="Category">
        <h1 className='Title-admin'>Danh Mục</h1>
        <table border={1} className='admin-category-border'>
          <thead>
            <tr className='category-header-column'>
              <th className='category-name-column'>Tên Danh Mục</th>
              <th>Chỉnh Sửa</th>
            </tr>
          </thead>
          <tbody>
            {category.map((data) => (
              <tr key={data.id}>
                <th>{data.categoryName}</th>
                <th className='category-button'>
                  <div onClick={() => navigate(`/admin/category/${data.id}`)} className='category-edit-button'>Sửa</div>
                  <div className='space'>space</div>
                  <div onClick={() => deleteButton(data)} className='category-delete-button'>Xóa</div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        {confirm && (
          <div className="confirm-delete">
            <div>
              <p>Bạn có muốn xóa danh mục "{selectCategory.categoryName}" không?</p>
              <div className='button-confirm-delete'>
                <button onClick={confirmDelete} className='delete'>Xóa</button>
                <div className='space'>space</div>
                <button onClick={cancelDelete} className='no-delete'>Không</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Category