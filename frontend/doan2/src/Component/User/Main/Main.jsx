import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Main.css";

const Main = () => {
  const [products, setProducts] = useState([]); // State để lưu dữ liệu từ API
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const navigate = useNavigate();

  const PPP = 15; // Số sản phẩm trên mỗi trang
  const totalPage = Math.ceil(filter.length / PPP);
  const CurrentProducts = filter.slice(
    (currentPage - 1) * PPP,
    currentPage * PPP
  );

  // Gọi API để lấy dữ liệu sản phẩm
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
        setFilter(response.data); // Khởi tạo filter với toàn bộ dữ liệu
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const filtered = products.filter((product) =>
      product.nameProduct.toLowerCase().includes(value)
    );
    setFilter(filtered);
    setCurrentPage(1);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div id="Main">
      <div className="Main">
        <div className="main-title">Shop</div>

        <div className="searchItem">
          <div className="searchContent">
            <input
              type="text"
              size={50}
              placeholder="Enter to search ...."
              value={search}
              onChange={handleSearch}
            />
          </div>
        </div>

        <div className="shop">
          {CurrentProducts.length > 0 ? (
            CurrentProducts.map((product) => (
              <div key={product._id} className="product">
                <img
                  onClick={() => navigate(`/product/${product._id}`)}
                  src={product.imageProduct[0]}
                  alt={product.description}
                  className="productImage"
                />
                <div className="productInfo">
                  <h4 className="productPrice">Giá: {product.lastprice}$</h4>
                  <h4 className="productQuantity">
                    Số lượng: {product.quantity}
                  </h4>
                </div>
                <h2 className="productName">{product.nameProduct}</h2>
                <div className="space-main-product">
                  <div className="inline-product"></div>
                </div>
                <div className="AddToCart">
                  <button
                    onClick={() => { }}
                    className="btnAddToCart"
                    disabled={product.quantity === 0}
                  >
                    {product.quantity === 0 ? "Hết hàng" : "Thêm vào giỏ hàng"}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="cant-find">
              <p>Can't found your search</p>
            </div>
          )}
        </div>

        <div className="SetPage">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={currentPage === number ? "active" : ""}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
