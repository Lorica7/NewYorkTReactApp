
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Article from "./pages/Article";


class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (

  
 <Router>
    <div className="continater-fluid">
      
      <Route exact path="/" component={Article} />
      <Route component = {Article}/>
    </div>
    </Router>
);
 };
}
export default App;
