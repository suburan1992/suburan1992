import React from "react";
import { useState } from "react";
import icon from "../images/new.png";


function RequestCard({ reqType, num }) {
  return (
    <div className="card mb-4 requestInfo">
      <div className="card-footer align-items-center">
        <div className="row">
          <div className="col-4" style={{ fontSize: "50px" }}>
            <img src={icon} className="img-responsive" alt="logo" />
          </div>
          <div className="col-8">
            {/* <div className="vertical-line" style={style}></div> */}
            <div style={{ textAlign: "right" }}>
              {/* <h1 style={{ fontSize: "50px", fontWeight: "bold",visibility:"hidden" }}>{num}</h1> */}
              <br></br>
              <h4 style={{height:"75px",visibility:"hidden"}}>{5}</h4>
              <h4>New Requests</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestCard;
