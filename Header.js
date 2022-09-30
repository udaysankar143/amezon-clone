/* eslint-disable no-unused-vars */
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{basket,user}, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/" className="header__link">
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header__logo" alt=""/>
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" placeholder="Search here..." />
        <i class="fa fa-search" aria-hidden="true"></i>
      </div>
      <div className="header__nav">
        <Link to={!user && "./Login"} className="header__link">
          <div onClick={handleAuthenticaton}  className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email} </span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <Link to="./Orders" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">returns</span>
            <span className="header__optionLineTwo">& orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">your</span>
          <span className="header__optionLineTwo">prime</span>
        </div>
        <Link to="./Checkout" className="header__link">
          <div className="header__basket">
            <i class="fa fa-shopping-basket " aria-hidden="true"></i>
            <span className="header__basketCount">{basket.length}</span>
          </div>
        </Link>
      
      </div>
    </div>
  )
}

export default Header;