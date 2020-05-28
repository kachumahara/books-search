const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// Matches with the "/api/google"
router
.route("/")
.get(googleController.findAll);

module.exports = router;
