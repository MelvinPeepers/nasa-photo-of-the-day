import React from 'react';

function NasaImages(props) {
  return(
      <div>
        <iframe className="nasa-image" type="text/html" width="560px" height="400px"
        src={props.url} frameBorder="0" title="myFrame" />
      </div>
  )
}

export default NasaImages;