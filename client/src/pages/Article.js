import React, { Component } from "react";
import API from "../utils/API";

// importing components // 

import Results from "../components/Results";
import Header from "../components/Header";
import ResultList from "../components/ResultList";
import SearchForms from "../components/SearchForms";
import SaveBtn from "../components/SaveBtn";


class Articles extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      saved: [],
      search: "",
      startYear: "",
      endYear: ""
    };
  }
  componentDidMount = () => {
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
    API.saveArticles(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  // saveArticles = id => {
  //   const article = this.state.articles.find(article =>
  //     article._id.API.saveArticle(article).then(res => this.loadArticles()));  
  // };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchArticles();
  };


  // searchTopics = search => {
  //   console.log("Searching!!!")
  //   console.log(this.state.search)
  //    API.search(search)
  //     .then(res => this.setState({ articles: res.data }))
  //     .catch(err => console.log(err));
  // };

  searchArticles = () => {
    API.search({
      search: this.state.search,
      startYear: this.state.startYear,
      endYear: this.state.endYear
    })
      .then(res => this.setState({
        articles: res.data,
        alert: !res.data.length
          ? "No Articles Found" : ""
      })
      ).catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Header />
        <SearchForms
          handleInputChange={this.handleInputChange}
          search={this.state.search}
          startYear={this.state.startYear}
          endYear={this.state.endYear}
          handleFormSubmit={this.handleFormSubmit}

        />

        <div>
          {this.state.articles.length ? (
            <ResultList>
              {this.state.articles.map(article => (

                <Results>
                  
                  _id={this.articles._id}
                  title={articles.headline.main}
                  date={articles.pub_date}
                  url={articles.web_url}
                  <SaveBtn>onClick={() => this.saveArticles(_id)}</SaveBtn> 
                  </Results>
                )
              )}
            </ResultList>
          ) : (
              <h3>No Results to Display</h3>
            )}
          )}
        </div>

        )</div >
    )
  };

};


export default Articles;
