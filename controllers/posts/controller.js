const Posts = require('../../models/posts');

const controller = {};


controller.index=(req, res) =>{
  Posts.findAll()
    .then(data => res.render('posts/index', {posts: data}))
    .catch(err => console.log('ERROR', err));
}

controller.new=(req, res) =>{
  res.render('posts/new_post');
}

controller.create=(req, res) =>{
  Posts.save(req.body.gif)
  .then(()=> res.redirect('/posts/'))
  .catch(err => console.log('ERROR:', err));
}

controller.show=(req, res) =>{
  Posts.findById(req.params.id)
  .then(data => res.render('posts/show', {posts: data}))
  .catch(err => console.log('ERROR:', err));
}

controller.like=(req, res)=>{
  Posts.like(req.params.id)
  .then(() => {
    if (req.query.show){
    res.redirect(`/posts/${req.params.id}`)
  } else { res.redirect('/posts')}})
  .catch(err => console.log('ERROR:', err));
}

controller.destroy=(req, res) => {
Gif.destroy(req.params.id)
.then(() => res.redirect('/gif'))
.catch(err => console.log('ERROR:', err));
}


module.exports = controller
