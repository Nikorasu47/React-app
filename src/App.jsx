import React from "react";
import { Routes, Route } from "react-router-dom"; // Import uniquement Routes et Route
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import Home from "./pages/home/home.jsx";
import Apropos from "./pages/a-propos/a-propos.jsx";
import Carroussel from "./pages/carroussel/carroussel.jsx";
import Error from "./pages/404error/error.jsx";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logement/:id" element={<Carroussel />} />
          <Route path="/a-propos" element={<Apropos />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
