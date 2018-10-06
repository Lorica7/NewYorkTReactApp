import React, { Component } from "react";

import API from "../utils/API";
import SaveBtn from "../components/SaveBtn";
// import DeleteBtn from "../components/DeleteButton";
import Results from "../components/Results";
import Header from "../components/Header";
import ResultList from "../components/ResultList";


class Articles extends Component {
  state = {
    articles: [],
    saved: [],
    query: "",
    start: "",
    end: ""
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ saved: res.data })
      )
      .catch(err => console.log(err));
  };

  deleteArticles = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  saveArticles = id => {
    console.log("saving Article")
    API.saveArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

 
  // handleChange(event) {
  //   this.setState({query: event.target.query});
  // }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchTopics(this.state.query);
  };


  searchTopics = query => {
    console.log("Searching!!!")
    console.log(this.state.query)
     API.search(this.state.query)
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div>
        <Header />
        <div className="card">
        <div className="card-body">
            <form>
                <div className="form-group">
                    <label htmlFor="search">Search:</label>
                    <input
                        onChange={this.handleInputChange}
                        value={this.state.query}
                        name="search"
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Topic"
                        id="search"
                    />
                    <br />
                    <input
                        onChange={this.handleInputChange}
                        value={this.state.query1}
                        name="search"
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Start Year"
                        id="search"
                    />
                    <input
                        onChange={this.handleInputChange}
                        value={this.state.query2}
                        name="search"
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="End Year"
                        id="search"
                    />
                    <button
                        onClick={this.handleFormSubmit}
                        className="btn btn-info">
                        Search
                    </button>
                </div>
            </form>
        </div>
    </div>

        <div>
          {!this.state.articles.length ? (
            <h1 className="text-center">No Articles Found</h1>)
         : (
              <ResultList>
                {this.state.articles.map(article=> {
                  return (
                    <div>
                    <Results
                      key={article._id}
                      title={article.title}
                      url={article.url}
                      datePub={article.datePub}
                    />
                    <SaveBtn onClick={() => this.saveArticles(article._id)} />
                  </div>
                  )
                })}
              </ResultList>
            )}
        </div>
        {/* <div>
        <h1>Saved Articles</h1>
        <div>
          {this.state.articles.length ? (
            <List>
              {this.state.articles.map(article => (
                <ListItem key={article._id}>
                  <Link to={article.url} >
                    <strong>
                      {article.title}
                    </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteArticles(article._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
          };
            </div> */}
      {/* </div> */}
    )</div>
  )}
};


export default Articles;
