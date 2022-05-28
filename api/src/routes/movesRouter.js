let express = require('express');
let router = express.Router();
const { create, getAll, destroy } = require('../controllers/moveController');

router.get('/', getAll)
router.post('/create', create);
router.delete('/delete', destroy);

module.exports = router;