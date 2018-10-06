const express = require("express");
// const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8080;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("/public"));
}
// Add routes, both API and view
app.use(routes);

app.get('/', function (req, res) {
  res.send('Hello World!'); 
});

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}`);
});
