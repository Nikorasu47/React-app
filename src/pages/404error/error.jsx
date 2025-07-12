import React from "react";
import { Link } from "react-router-dom";
import "./error.css";

const Error = () => {
  return (
    <div className="error-page">
      <p className="number">404</p>
      <p className="oups">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="return">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default Error;