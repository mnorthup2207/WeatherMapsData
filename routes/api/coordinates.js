const router = require("express").Router();
const coordinatesController = require("../../controllers/coordinatesController");
// dd658d9b-a441-421d-b04f-a56e333a46ad
// Matches with "/api/coordinates"
router.route("/")
  .get(coordinatesController.findAll)
  .post(coordinatesController.create);

// Matches with "/api/coordinates/:id"
router
  .route("/:id")
  .get(coordinatesController.findById)
  .delete(coordinatesController.remove);

module.exports =  router;
