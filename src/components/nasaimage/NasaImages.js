import React from 'react';

function NasaImages(props) {
  return(
      <div className="nasa-images">
        <iframe className="nasa-images-frame" type="text/html" width="320px" height="240px"
        src={props.url} frameBorder="0" title="myFrame" />
      </div>
  )
}

export default NasaImages;