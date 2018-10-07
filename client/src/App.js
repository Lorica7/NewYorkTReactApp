 import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Article from "./pages/Article";

const App = () => (

  
 <Router>
    <div className="continater-fluid">
      <Route exact path = '/' component = {Article}/>
    
    </div>
    </Router>
);
 
export default App;
