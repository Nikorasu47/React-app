import React from "react";
import Logo from "../../assets/LOGO.svg";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="logo kasa" />
      <nav>
        <Link to="/" >Accueil</Link>
        <Link to="/a-propos" >A Propos </Link>
      </nav>
    </div>
  );
};

export default Header;
