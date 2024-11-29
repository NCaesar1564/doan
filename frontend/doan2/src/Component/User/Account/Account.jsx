import React, { useState } from 'react'
import Login from '../Login/Login';
import Register from '../Register/Register'
import './Account.css'

const Account = () => {
    const [component, setComponent] = useState("Login");
    const showLogin = () => setComponent("Login")
    const ShowRegister = () => setComponent("Register")
    return (
        <div className='Account' id='Account'>
            <div className='Account-button'>
                <button onClick={showLogin} className='login-register-button'>Login</button>
                <button onClick={ShowRegister} className='login-register-button'>Register</button>
            </div>
            <div className='Account-Offer'>
                {component === "Login" ? <Login /> : <Register />}
            </div>
        </div>
    )
}

export default Account