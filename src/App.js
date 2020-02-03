import React from "react";
import NavBar from "./components/navbar/NavBar.js";
import NasaImage from "./components/nasaimage/NasaImage.js";

function App() {
  
  return (
    <div className="App">
      <div>
        <NavBar />
        <div className="nasa-images">
         <NasaImage />
        </div>
      </div>
    </div>
  );
}

export default App;
