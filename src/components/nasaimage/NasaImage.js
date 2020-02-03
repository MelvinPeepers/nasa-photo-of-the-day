import React, { useState, useEffect } from "react";
import axios from 'axios';
import NasaImages from "./NasaImages";


function NasaImage() {
  const [nasaImages, setNasaImages] = useState();


  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=w162fOmcGrc19Xe0mDbkYBWOh6OfqCDB4VDqzTPS`)
      .then(response => {
        setNasaImages(response.data)
      })
      .catch(error => console.log(error));
  }, []);

  return(
    <div className="nasa-image">
      {nasaImages && nasaImages.url ? <NasaImages url={nasaImages.url} /> : <NasaImages />}
    </div>
  )
}

export default NasaImage;