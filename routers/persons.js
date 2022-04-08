const router = require("express").Router();
const homePage = require("../controller/homePage");

router.get("/", homePage.person_getList);
router.get("/:id", homePage.person_getId);
router.post("/", homePage.person_postList);
router.patch("/:id", homePage.person_patchList);
router.delete("/:id", homePage.person_deleteList);

module.exports = router;
