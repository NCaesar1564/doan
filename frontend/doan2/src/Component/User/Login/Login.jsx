import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [message, setMessage] = useState(""); 
  const [account, setAccount] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [users, setUsers] = useState([]); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data); 
        console.log("Users fetched:", response.data);
      } catch (err) {
        setError(err.message); 
        console.error("Error fetching users:", err.message);
      }
    };

    fetchUsers();
  }, []);

  // Xử lý form submit
  const SubmitButton = (e) => {
    e.preventDefault();
    const checked = users.find(
      (user) => user.account === account && user.password === password
    );
    if (!checked) {
      setMessage("Tên tài khoản hoặc mật khẩu không chính xác");
    } else {
      setMessage("Đăng nhập thành công!");
      // Thêm logic sau khi đăng nhập thành công (ví dụ: chuyển hướng)
    }
  };

  return (
    <>
      <div className="Login" id="Login">
        <div className="form-login">
          <form className="form" onSubmit={SubmitButton}>
            <div>
              <h1 className="title-login">Login</h1>
              {message && (
                <p
                  style={{
                    color: message === "Đăng nhập thành công!" ? "green" : "red",
                    marginTop: "15px",
                    textAlign: "center",
                  }}
                >
                  {message}
                </p>
              )}
              <div className="form-login">
                <div className="login-info">
                  <input
                    type="email"
                    required
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                    placeholder="Enter your account"
                  />
                </div>
                <div className="login-info">
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <div className="Remember">
                <input type="checkbox" className="remember" id="remember" />
                <label htmlFor="remember">Ghi nhớ</label>
              </div>
              <input type="submit" className="login-submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
