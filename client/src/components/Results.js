
import SaveBtn from "./SaveBtn";
import React from "react";


const Results = props => (

  <div className="container">
 
  <li className="list-group-item">
    {props.children}
    <SaveBtn/>
  </li>
  </div>
);

export default Results;