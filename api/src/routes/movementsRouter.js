let express = require('express');
let router = express.Router();
const { create, getAll, destroy, Type, Category, update } = require('../controllers/movementController');

router.get('/', getAll)
router.get('/type', Type)
router.get('/category', Category)
router.post('/create', create);
router.put('/edit', update);
router.delete('/delete', destroy);

module.exports = router;