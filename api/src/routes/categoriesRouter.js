let express = require('express');
let router = express.Router();
const { getAll, findOrCreate } = require('../controllers/categoryController');

router.get('/', getAll)
router.post('/create', findOrCreate);

module.exports = router;