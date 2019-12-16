import React from "react";

import "./Preview.css";

const preview = props => (
  <div>
    <div className="row">
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            <div className="details">
              <h4>{props.name}</h4>
              <div className="Info">
                <p>Exceedance: {props.exceedance}</p>
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
    </div>
  </div>
);

export default preview;
