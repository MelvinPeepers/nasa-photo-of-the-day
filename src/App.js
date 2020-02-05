import React from "react";
import NavBar from "./components/navbar/NavBar.js";
import Footer from "./components/footer/Footer.js";
import NasaImage from "./components/nasaimage/NasaImage.js";

function App() {
  
  return (
    <div className="App">
      <div className="navbar-container">
        <NavBar />
      </div>
      <div className="nasaimage-container">
        <NasaImage />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
