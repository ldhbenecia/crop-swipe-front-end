import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

import textLogo from "../../assets/images/textLogo.png"

const Header = () => {
  return (
    <header className="header">
      <div className="header-in">
        <div className="left-tab">
          <Link to="/">
            <img className="logo-image" src={textLogo} alt="titleLogo"></img>
          </Link>
        </div>
        <nav className="menu">
          <Link to="/board">
            <span>자율 게시판</span>
          </Link>
          <Link to="/transaction">
            <span>거래하기</span>
          </Link>
          <Link to="/signin">
            <span>로그인</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
