import React from 'react';

function NasaDate(props) {
  return(
      <div>
<p>{props.data && props.date ? props.date : null} {props.date && props.date ? props.date : null}</p>
      </div>
  )
}

export default NasaDate;