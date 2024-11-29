import React, { useState } from "react";
import './Register.css'
import DataUser from "../Data/DataUser";
const Register = () => {
  const [account, setAccount] = useState("");
  const [password1,setPassword ] = useState("");
  const [password2, setConfirm] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const RegisterButton = (e) =>{
    e.preventDefault();
    const check1 = DataUser.find((a) => {a.account === account});
    const check2 = (password1 !== password2);
    const check3 = (DataUser.find((a) => {a.phone === phone}));
    if(check1){
      setMessage(`Tài khoản này đã được đăng ký trước đó rồi`)
    }
    if(check2){
      setMessage(`Mật khẩu xác nhận không chính xác`)
    }
    if(check3){
      setMessage("Số điện thoại này đã được đăng ký trước đó rồi")
    }
  } 
  return (
    <div>
      <div className="Register" id="Register">
        <div className="form-Register">
          <form className="form1">
            <div>
              <h1 className="title-Register">Register</h1>
              <div className="Register-info">
                <input type="text" value={name} required placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="Register-info">
                <input type="text" value={phone} required placeholder="Enter your phone" onChange={(e) => setPhone(e.target.value)}/>
              </div>
              <div className="Register-info">
                <input type="email" value={account} required placeholder="Enter your account" onChange={(e) => setAccount(e.target.value)}/>
              </div>
              <div className="Register-info">
                <input type="password" value={password1} required placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
              </div>
              <div className="Register-info">
                <input type="password" value={password2} required placeholder="Confirm your password" onChange={(e)=>setConfirm(e.target.value)}/>
              </div>
              {message && <p style={{color:"red", }}>{message}</p>}
              <div className="create-account">
                <button type="submit">Register</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
