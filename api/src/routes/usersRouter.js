let express = require("express");
let router = express.Router();
const { findOrCreate } = require("../controllers/userController");

router.post("/", findOrCreate);
/* router.put("/", editName) */

module.exports = router;