let express = require('express');
let router = express.Router();
const { findOrCreate, editName } = require('../controllers/userController');

router.post('/', findOrCreate);
router.put('/', editName)

module.exports = router;