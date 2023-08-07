import { useState, useContext } from "react";
import logo from "../assests/images/logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => (
  <Link to="/">
    <img className="h-28 p-2" alt="" src={logo} />
  </Link>
);

//React functional component
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const userStatus = useOnline();

  const {user} = useContext(UserContext);

  const cartItems = useSelector(store => store.cart.items);
 // console.log(cartItems)

  return (
    <div className="flex justify-between bg-blue-500 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
        
            <li className="px-2 space-x-4 "><Link to="/" >Home </Link></li>
         
            <li className="px-2 "><Link to="/about">About </Link></li>
            <li className="px-2 "><Link to="/contact">Contact </Link></li>
            <li className="px-2 "><Link to="/cart">Cart {cartItems.length} </Link></li>
            <li className="px-2 "><Link to="/instamart">Instamart</Link></li>
        </ul>
      </div>
      {userStatus ? <h4 className="p-10">Online</h4> : <h4>Offline</h4>}
      {isLoggedIn === true ? (
        <button
        className="p-5"
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button
        className="p-5"
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          {" "}
          Login
        </button>
      )}
    </div>
  );
};

//didn't export title component because we only need title in our header
//and therefore we only export header as default best approach
export default Header;
