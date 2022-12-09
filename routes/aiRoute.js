const router = require("express").Router()

const aiController = require("../controllers/aiController")

router.get("/",aiController)

module.exports = router