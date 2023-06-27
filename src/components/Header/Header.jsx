import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./Header.scss";

import textLogo from "../../assets/images/textLogo.png";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "../../recoil/authState";

const Header = () => {
  const [cookies, , removeCookie] = useCookies([
    "access-token",
    "refresh-token",
  ]);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  useEffect(() => {
    const accessToken = cookies["access-token"];
    const refreshToken = cookies["refresh-token"];
    setIsLoggedIn(accessToken && refreshToken);
  }, [cookies, setIsLoggedIn]);


  const handleLogout = () => {
    localStorage.removeItem("isCodeProcessed"); // KOE320 에러 방지 토큰
    removeCookie("access-token", { path: "/" });
    removeCookie("refresh-token", { path: "/" });
    setIsLoggedIn(false);
    window.location.replace("/");
  };

  return (
    <header className="header">
      <div className="header-in">
        <div className="left-tab">
          <Link to="/">
            <img className="logo-image" src={textLogo} alt="titleLogo"></img>
          </Link>
        </div>
        <nav className="menu">
          <Link to="/productstart">
            <span>거래하기</span>
          </Link>
          <Link to="/board">
            <span>Q&A 게시판</span>
          </Link>
          {isLoggedIn ? (
            <span onClick={handleLogout}>
              <span>로그아웃</span>
            </span>
          ) : (
            <Link to="/signin">
              <span>로그인</span>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
