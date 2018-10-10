import React from "react";


const ResultList = ({ children }) => {
  return (
    <div className="card">
      <div className="card-body">
        <ul className="list-group">
          {children}
          </ul>
      </div>
    </div>
  );
}
export default ResultList;