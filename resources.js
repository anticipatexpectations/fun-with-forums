const express = require('express');
const router = express.Router();


router.use('/posts', require('./controllers/posts'));
router.use('/comments', require('./controllers/comments'));


module.exports = router;
