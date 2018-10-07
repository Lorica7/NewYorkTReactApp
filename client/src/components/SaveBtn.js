import React from "react";


const SaveBtn = props => (
  <span className="save-btn" {...props}>
   <button id = { props.article._id } className = "btn btn-primary save-btn" 
  //  onClick = {() => handleSaveButton(_id)} 
  > Save article </button>
  </span>
);

export default SaveBtn;