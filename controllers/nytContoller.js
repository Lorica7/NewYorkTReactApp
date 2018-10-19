// const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
//  const APIKEY = "&api-key=Yf3e1b0323f464751a8bf08e2474e3a4d";const axios = require("axios");
//  const axios = require ("axios");
//  const db = require("../models")

   
//  module.exports = {
// //
// searchArticles: function (req, res) {
//   axios
//     .get(BASEURL, { params: req.query }, APIKEY )
//     .then(({ data: { res } }) => res.json(res))
//     console.log(res)
//     .catch(err => res.status(422).json(err));
// }
//  }

//  findAll: function (req, res){
//     const params = Object.assign(
// {api_key: "sdfhsdlhgskde"},
// req.query
//     );

//     axios
//       .get (nytimes url for api)
//       params
//   })
//   .then (response => {
//     db.Article
//     .find()
//     .then(dbArticles =>
//       response.data.response.docs.filter(article =>
//         dbArticles.every(
//           dbArticle => dbArticle._id.toString () !== article
//         )))
//         .then(articles => res.json(articles))
//   })