import React from "react";

import MainHeader from "../../components/Header/MainHeader";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";

import "./MainPage.scss";

const MainPage = () => {
  return (
    <>
      <MainHeader />
      <div className="Main_Wrapper">
        <Main />
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
