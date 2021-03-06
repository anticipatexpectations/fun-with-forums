const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.get('/edit/:id', controller.edit);
router.put('/like/:id', controller.like);
router.get("/new", controller.new);
// router.get("/:id", controller.show);
router.delete('/:id', controller.destroy);
router.get('/', controller.index);
router.post('/new', controller.create);



module.exports = router
