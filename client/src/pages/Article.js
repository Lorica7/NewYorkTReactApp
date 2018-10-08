import React, { Component } from "react";
import API from "../utils/API";

// import DeleteBtn from "../components/DeleteButton";
import Results from "../components/Results";
import Header from "../components/Header";
import ResultList from "../components/ResultList";
import SearchForms from "../components/SearchForms";


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
    API.saveArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  // saveArticles = id => {
  //   const article = this.state.articles.find(article =>
  //     article._API.saveArticle(articles).then(res => this.getArticles()));  
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
               
                  <Results
                  key={article._id}
                    _id={article._id}
                    title={article.headline.main}
                    date={article.pub_date}
                    url={article.web_url}
                    // snippet={article.snippet}
                    handleSaveButton={this.handleSaveButton}
                  />
                )
              )}
              </ResultList>
              ) : ( 
                <h3>No Results to Display</h3>
              )} 
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
              
            )}
          };
            </div> */}
        {/* </div> */}
        )</div >
    )
  };

};


export default Articles;
