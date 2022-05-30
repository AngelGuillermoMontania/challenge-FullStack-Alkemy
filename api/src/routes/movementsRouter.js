let express = require('express');
let router = express.Router();
const { create, getAll, destroy, Type, Category } = require('../controllers/movementController');

router.get('/', getAll)
router.get('/type', Type)
router.get('/category', Category)
router.post('/create', create);
router.delete('/delete', destroy);

module.exports = router;