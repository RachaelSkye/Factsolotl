import React from "react";

import "./Preview.css";

const preview = (props) => {

  let exceedanceCheck;
  let exceedance;

  if (props.exceedance === 'Yes') {
      exceedanceCheck = 'redBG pulse'
      exceedance = 'Has exceedance'
  } else if (props.exceedance === 'No') {
      exceedanceCheck = 'greenBG'
  }

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
                    chevron_right
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
