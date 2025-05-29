import React from "react";

import "./error.css";

const Error = () => {
  return (
    <div className="error-page">
      <p className="number">404</p>
      <p className="oups">Oups! La page que vous demandez n'existe pas.</p>
      <a className="return">Retourner sur la page d’accueil</a>
    </div>
  );
};

export default Error;
