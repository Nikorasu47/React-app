import React from "react";
import Logo from "../../assets/LOGO-footer.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Logo} alt="logo kasa" />

      <p className="all-right">© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
