import React from 'react';

function NasaExplan(props) {

  return(
      <div className="nasa-explan">
        <p className="nasa-explan-text">{props.data && props.explanation ? props.explanation : null} {props.explanation && props.explanation ? props.explanation : null}</p>
      </div>
  )
}

export default NasaExplan;