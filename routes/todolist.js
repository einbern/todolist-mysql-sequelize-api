const router = require('express').Router();
const todolistController = require('../controllers/todolist');

router.post('/', todolistController.createList);
router.get('/', todolistController.getList);
router.get('/:id', todolistController.getlistById);
router.put('/:id', todolistController.updateList);
router.delete('/:id', todolistController.deleteList);

module.exports = router;