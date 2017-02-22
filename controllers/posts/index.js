const express = require('express');
const router = express.Router();
const controller = require('./controller')



router.put('/:post_id/:id/clike', controller.clike);
router.put('/:id/like/', controller.like);
router.get('/:id/edit/', controller.edit);
// router.put('/:id/', controller.commentsPlusOne);
router.get('/new', controller.new);
router.post('/new', controller.create);
router.put('/:id', controller.update);
router.get('/:id', controller.show);
router.delete('/:id', controller.destroy);
router.post('/:id', controller.createComment);
router.get('/', controller.index);

module.exports = router
