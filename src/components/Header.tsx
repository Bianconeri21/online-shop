import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../assets/img/toys-shop.png";
import cart from "../assets/img/trolley.png";
import { RootState } from "../redux/store";
import Search from "./Search";

const Header: React.FC = () => {
  const { totalCount, totalPrice } = useSelector(({ cart }: RootState) => cart);
  return (
    <div className="header">
      <div className="header__container">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="Toy shop logo" />
          </div>
        </Link>
        <Search />
        <div className="cart">
          <div className="shoping-info">
            <span className="total-price">{totalPrice} $</span>
            <span className="total-count">{totalCount}</span>
          </div>
          <Link to="/cart">
            <img src={cart} alt="Cart logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
