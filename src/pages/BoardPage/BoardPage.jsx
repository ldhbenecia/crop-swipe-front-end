import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import QnABoard from "../../components/Board/QnABoard";
import "./BoardPage.scss"

const BoardPage = () => {
  return (
    <div className="boardPage-wrapper">
      <div className="boardPage-inner">
        <Header />
        <QnABoard />
      </div>
      <Footer />
    </div>
  );
};

export default BoardPage;
