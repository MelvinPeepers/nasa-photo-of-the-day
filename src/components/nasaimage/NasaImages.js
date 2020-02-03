import React from 'react';

function NasaImages(props) {
  return(
    <div className="nasa-title">
      <h3 className="image-title">{}</h3>
      <div>
        <img src={props.url} className="nasa-image" alt="Nasa Pic"></img>
      </div>
    </div>
  )
}

export default NasaImages;