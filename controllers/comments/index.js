const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.put('/edit/:id', controller.edit);
router.put('/like/:id', controller.like);
router.get("/new", controller.new);
router.get("/:id", controller.show);
router.get('/', controller.index);
router.post('/', controller.create);


module.exports = router
