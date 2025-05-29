import React from "react";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import "./App.css";
import Banner from "./components/banner/banner";

function App() {
 

  return (
    <>
      <header>
        <Header />
      </header>
      <div className= "main-content">
        <Banner />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
