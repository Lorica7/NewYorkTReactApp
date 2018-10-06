import React, { Component } from "react";

import API from "../utils/API";

import SearchForm from "../components/Search";

import Header from "../components/Header";


class Articles extends Component {
  state = {
    articles: [],
    saved: [],
    query: "",
    start: "",
    end: ""
  };

  // componentDidMount() {
  //   this.loadArticles();
  // }

  // loadArticles = () => {
  //   API.getArticles()
  //     .then(res =>
  //       this.setState({ saved: res.data })
  //     )
  //     .catch(err => console.log(err));
  // };

  // deleteArticles = id => {
  //   API.deleteArticle(id)
  //     .then(res => this.loadArticles())
  //     .catch(err => console.log(err));
  // };

  // saveArticles = id => {
  //   console.log("saving Article")
  //   API.saveArticle(id)
  //     .then(res => this.loadArticles())
  //     .catch(err => console.log(err));
  // };

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

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  searchTopics = query => {
    console.log("Searching!!!")
     API.search(this.state.query)
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div>
        <Header />
        <SearchForm
          value={this.state.query}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />

        {/* <div>
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
        </div> */}
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
