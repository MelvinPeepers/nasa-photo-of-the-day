import React, { useState, useEffect }from "react";
import NavBar from "./components/navbar/NavBar.js";

function App() {
  const [NasaImages, setNavaImages] = useState([]);

  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
    </div>
  );
}

export default App;
