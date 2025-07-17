import React from "react";
import Logo from "../../assets/LOGO.svg";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="logo kasa" />
       <nav>
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? "active" : "")}
          end 
        >
          Accueil
        </NavLink>
        <NavLink 
          to="/a-propos" 
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          A Propos
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
