const router = require("express").Router();

const { getAllEvents } = require("../controllers/events");

router.get("/", getAllEvents);

module.exports = router;
