import Header from "../../Component/User/Header/Header";
import HeaderImage from "../../Component/User/HeaderImage/HeaderImage";
import Cart from "../../Component/User/Cart/Cart";
import Main from "../../Component/User/Main/Main";
import Contact from '../../Component/User/Contact/Contact'
import Account from "../../Component/User/Account/Account";
import Login from "../../Component/User/Login/Login";
import Register from "../../Component/User/Register/Register";
import './HomePage.css'

function HomePage() {
  return (
    <div className="HomePage">
      <div className="head">
        <Header />
      </div>
      <div className="HeaderImage">
        <HeaderImage />
      </div>
      <div className="main">
        <Main />
      </div>
      <div className="account">
        <Account /> 
      </div>
      <div className="cart">
        <Cart />
      </div>
      <div className="contact">
        <Contact />
      </div>
      <div className="login">
        <Login />
      </div>
      <div className="register">
        <Register />
      </div>
    </div>
  );
}

export default HomePage;

