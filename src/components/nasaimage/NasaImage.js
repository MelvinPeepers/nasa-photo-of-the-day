import React, { useState, useEffect } from "react";
import axios from 'axios';
import NasaImages from "./NasaImages";
import NasaTitle from "./NasaTitle";
import NasaDate from "./NasaDate";
import NasaExplan from "./NasaExplan";
import './NasaImage.css';


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
      {nasaImages && nasaImages.title ? <><NasaTitle title={nasaImages.title}/></> : <NasaTitle />}
      {nasaImages && nasaImages.url ? <NasaImages url={nasaImages.url} /> : <NasaImages />}
      {nasaImages && nasaImages.date ? <><NasaDate date={nasaImages.date}/></> : <NasaDate />}
      {nasaImages && nasaImages.explanation ? <><NasaExplan explanation={nasaImages.explanation}/></> : <NasaExplan />}
    </div>
  )
}

export default NasaImage;