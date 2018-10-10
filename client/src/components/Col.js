import React from "react";

export const Col = ({ size, children }) => (
  <div className={size.split(" ").map(size => "col-" + size).join(" ")}>
    {children}
  </div>
);

export default Col;


// movie notes

// methods for the NYT controller

module.exports = {

 











}