const router = require("express").Router()
const { createInformation, Informations, } = require("../controllers/user")
router.route("/create").post(createInformation)

router.route("/info").get(Informations)

module.exports = router