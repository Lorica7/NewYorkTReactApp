import React from "react";


const ResultList = ({ children }) => {
  return (
    <div class="card">
      <div className="card-body">
        <ul className="list-group">
          {children}
          </ul>
      </div>
    </div>
  );
}
export default ResultList;