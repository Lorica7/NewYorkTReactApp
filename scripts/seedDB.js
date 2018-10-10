// const mongoose = require("mongoose");
// const db = require("../models");

// // This file empties the articles collection and inserts the articles below

// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodb://localhost/NewYorkTReactapp"
// );

// // const articleSeed = [ 
//     title: "New York Times Article",
//     url: "link",
//     datePub: 10/02/18
//     notes: "words"
// ]
 

// db.Article
//   .remove({})
//   .then(() => db.Article.collection.insertMany(articleSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
