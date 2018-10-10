

import React from "react";


const Results = props => (

  <div className="container">
 
  <li className="list-group-item">
    <h2>{props.title}</h2>
    <a href= {props.web_url} ><p>Click Here to Read Full Piece.</p></a>
   <h4>{props.date_pub}></h4>
  </li>
  </div>
);

export default Results;