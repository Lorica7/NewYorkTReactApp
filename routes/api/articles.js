const router = require("express").Router();
const axios = require("axios");
const articlesController = require("../../controllers/articleController");
const router = require("express").Router();
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
const APIKEY = "&api-key=Yf3e1b0323f464751a8bf08e2474e3a4d";

router.route("/api/articles")
  .get(articlesController.findAll)
  .post(articlesController.create);

router
  .route("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

  router.get("/articles", (req, res) => {
    axios
      .get(BASEURL, { params: req.query }, APIKEY )
      .then(({ data: { results } }) => res.json(results))
      console.log(results)
      .catch(err => res.status(422).json(err));
  });
  
module.exports = router;

