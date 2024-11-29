import LoggedIn from "../LoggedIn/LoggedIn";
import { IoMdSearch } from "react-icons/io";
import { BiCart } from "react-icons/bi";
import { Link } from "react-scroll";
import "./Header.css";
import { FaHome, FaPhoneAlt, FaStoreAlt } from "react-icons/fa";
const Header = () => {
  return (
    <div className="Header" id="Header">
      <div className="HeaderContent">
        <Link to='HeaderImage' className="content"><FaHome />  Home</Link>
        <Link className="content" to="Main" ><FaStoreAlt /> Product</Link>
        <Link className="content" to="Contact"><FaPhoneAlt /> Contact</Link>
        <Link className="content" to="Cart"><BiCart />  Cart</Link>
        <Link className="content islogin" to="Account">{<LoggedIn isLogged={true} />}</Link>
      </div>
    </div>
  );
};

export default Header;
