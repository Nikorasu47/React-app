import React from "react";
import Logo from "../../assets/LOGO.svg";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="logo kasa" />
      <nav>
        <a>Accueil</a>
        <a>A Propos</a>
      </nav>
    </div>
  );
};

export default Header;
