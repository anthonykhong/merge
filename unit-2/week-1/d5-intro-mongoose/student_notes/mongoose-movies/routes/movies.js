var express = require("express");
var router = express.Router();

const moviesCtrl = require("../controllers/movies");

/* GET movies listing. */
// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });
// localhost:3000/movies/new
// All routes start with /movies
// /movies is already taken care of in server.js
router.get("/new", moviesCtrl.new);

// POST /movies
router.post("/", moviesCtrl.create);

// Get /movies Read all movies
router.get("/", moviesCtrl.index);

module.exports = router;
