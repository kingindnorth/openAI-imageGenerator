const router = require("express").Router()

const aiController = require("../controllers/aiController")

router.post("/",aiController)

module.exports = router