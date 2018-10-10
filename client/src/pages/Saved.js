import React from "react";
import Col from "../components/Col";
import DeleteBtn from "../components/DeleteButton";


const Saved = props => (

<Col size="md-6 sm-12">
<Jumbotron>
  <h1>Saved Articles</h1>
</Jumbotron>
{this.state.articles.length ? (
  <List>
    {this.state.articles.map(article => (
      <ListItem key={article._id}>
        <Link to={"/articles/" + article._id}>
          <strong>
            {article.title} by {article.author}
          </strong>
        </Link>
        <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
      </ListItem>
    ))}
  </List>
) : (
  <h3>No Results to Display</h3>
)}
</Col>
)

export default Saved;


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