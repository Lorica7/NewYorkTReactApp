import React from "react";
import Saved from "./components/Saved.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Article from "./pages/Article";
import NotFound from "./components/NotFound.js";

const App = () => (


  <Router>
    <div className="continater-fluid">
      <Switch>
        <Route exact path='/' component={Article} />
        <Route exact path="/saved" component={Saved} />
        <Route component ={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
