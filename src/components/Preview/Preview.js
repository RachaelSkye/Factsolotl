import React from "react";

import "./Preview.css";

const preview = (props) => {

  let exceedanceCheck;

  if (props.exceedance === 'Yes') {
      exceedanceCheck = 'redBG pulse'
  } else if (props.exceedance === 'No') {
      exceedanceCheck = 'greenBG'
  }
 
  console.log(props.toggleDetails)
  return (
    <div className={exceedanceCheck} >
    <div className="row">
        <div className="card">
            <div className="details">
              <h4>{props.name}</h4>
              <div className="Info">
                <button
                  onClick={props.clicked}
                  id="expand"
                  className="btn btn waves-effect waves-dark white">
                  <i id="chevron" className="material-icons">
                  expand_more
                  </i>
                </button>
              </div>
            </div>
      </div>
    </div>
   </div>
  );
}




export default preview;
