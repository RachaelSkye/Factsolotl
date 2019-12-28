import React from "react";

import "./Preview.css";

const preview = (props) => {

  let exceedanceCheck;

  if (props.exceedance === 'Yes') {
      exceedanceCheck = 'redBG pulse btn-floating btn waves-effect waves-dark red'
  } else if (props.exceedance === 'No') {
      exceedanceCheck = 'greenBG btn-floating btn waves-effect waves-dark white'
  }
 
  return (
    <div >
    <div className="row">
        <div id='previewCard' className="card">
            <div className="details">
              <h4 className='schoolPreviewName'>{props.name}</h4>
              <label>  {props.sampleLocation}</label>
              <p>{props.id}</p>

            <div className="Info">
                <button
                  onClick={props.clicked}
                  id="expand"
                  className={exceedanceCheck}>
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
