import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      © Copyright {new Date().getFullYear()} CropSwipe - All Rights Reserved
    </footer>
  );
};

export default Footer;
