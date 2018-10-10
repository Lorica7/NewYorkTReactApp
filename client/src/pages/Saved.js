
import React, { Component } from "react";
import API from "../utils/API";
import Col from "../components/Col";
import DeleteBtn from "../components/DeleteButton";
import List from "../components/List";
import ListItem from "../components/ListItem";

class Saved extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }
  
  deleteArticles = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

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



  render() {
    return (

      <div>

        <Col size="md-6 sm-12">

          <h1>Saved Articles</h1>

          {this.state.articles.length ? (
            <List>
              {this.state.articles.map(article => (
                <ListItem key={article._id}>
                 
                    <strong>
                      {article.title} 
                    </strong>
                 
                  <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Col>
      </div>
    )
  };
}
export default Saved;


/* <div>
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
            </div> */
