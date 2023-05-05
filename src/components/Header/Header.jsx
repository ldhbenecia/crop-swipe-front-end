import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/logo.png"

const Header = () => {
  return (
    <header className="header">
      <div className="header-in">
        <div className="left-tab">
          <img className="logo-image" src={logo}></img>
          <Link to="/">
            <h3>CropSwipe</h3>
          </Link>
        </div>
        <nav className="menu">
          <Link to="/board">
            <span>자율 게시판</span>
          </Link>
          <Link to="/transaction">
            <span>거래하기</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
