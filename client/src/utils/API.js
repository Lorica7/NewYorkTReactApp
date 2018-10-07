import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
const APIKEY = "f3e1b0323f464751a8bf08e2474e3a4d";

export default {

 
search: function(query) {
  axios.get(BASEURL + query + "&api-key=" + APIKEY)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    
  },

  getArticles: function () {
    return axios.get("/api/articles");
  },

  saveArticles: function (articleData) {
    return axios.post("/api/articles", articleData);
  },
  deleteArticles: function (id) {
    return axios.delete("/api/articles/" + id);
  }

}
