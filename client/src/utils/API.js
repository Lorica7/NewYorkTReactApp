import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
const APIKEY = "f3e1b0323f464751a8bf08e2474e3a4d";

// const endYear = "?end_date=xyz"

//Format: YYYYMMDD  string


export default {

search: function(query, startYear, endYear) {
 return axios.get(BASEURL + query + "&api-key=" + APIKEY + "&?begin_date=" + startYear + "&?end_date=" + endYear)
  
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
