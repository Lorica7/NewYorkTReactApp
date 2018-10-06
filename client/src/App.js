 import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Article from "./pages/Article";

const App = () => (

  
 <Router>
    <div className="continater-fluid">
      <Switch>
      <Route exact path="/" component={Article} />
      <Route component = {Article}/>
      </Switch>
    </div>
    </Router>
);
 
export default App;
