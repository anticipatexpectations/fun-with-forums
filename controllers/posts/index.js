const express = require('express');
const router = express.Router();
const controller = require('./controller')


router.get('/:id/edit/', controller.edit);
router.put('/:id/like/', controller.like);
router.get("/new", controller.new);
router.get("/:id", controller.show);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.get('/', controller.index);
router.post('/new', controller.create);


module.exports = router
