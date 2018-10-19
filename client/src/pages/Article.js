import React, { Component } from "react";
import API from "../utils/API";
import Results from "../components/Results";
import Header from "../components/Header";
import Input from "../components/Input"
import ResultList from "../components/ResultList";
import SaveBtn from "../components/SaveBtn";


class Articles extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      saved: [],
      search: "",

    };
  }
  // componentDidMount = () => {
  //   this.searchArticles();
  // }

  // loadArticles = () => {
  //   API.getArticles()
  //     .then(res =>
  //       this.setState({ saved: res.data })
  //     )
  //     .catch(err => console.log(err));
  // };



  saveArticles = (title, date, url) => {
    console.log("saving Article")
    API.saveArticles({ title, date, url })
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  // saveArticles = id => {
  //   const article = this.state.articles.find(article =>
  //     article._id.API.saveArticle(article).then(res => this.loadArticles()));  
  // };


  handleInputChange = event => {
    const { name, value } = event.target
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
    const search = this.state.search
    API.search(search
    )
      .then(res => this.setState({
        articles: res.data.response.docs
      }), console.log(this.state)
      ).catch(err => console.log(err));
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
                <Input
                  onChange={this.handleInputChange}
                  value={this.state.search}
                  name="search"
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Topic"
                 
                 />
                  <br />
                    <Input
                        onChange={this.handleInputChange}
                        value={this.state.startYear}
                        name="startYear"
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Start Year"
                        
                    />
                    <Input
                        onChange={this.handleInputChange}
                        value={this.state.endYear}
                        name="endYear"
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="End Year"
                      
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
          {this.state.articles.length ? (
            <ResultList>
              {this.state.articles.map(article => (
                <Results key={article._id} id={article._id} date={article.pub_date}>
                  <a href={article.web_url}>{article.headline.main}</a>
                  <SaveBtn onClick={() => this.saveArticle(article.headline.main, article.pub_date, article.web_url)} />
                </Results>
              ))}
            </ResultList>
          ) : (
              <h3>No Results Search Results to Display</h3>
            )}
        </div>

        )</div >
    )
  };

};


export default Articles;
