const Posts = require('../../models/posts');

const controller = {};


controller.index=(req, res) =>{
  Posts.findAll()
    .then(data => res.render('posts/index', {posts: data}))
    .catch(err => console.log('ERROR', err));
}

controller.new=(req, res) =>{
  console.log(req.body, req.query);
  res.render('posts/new_post');
}

controller.edit=(req, res) => {
  Posts.findById(req.params.id)
  .then(data => res.render('posts/edit', {posts: data}))
  .catch(err => console.log('ERROR:', err));
}

controller.update = (req, res) => {
  Posts.update(req.body.posts, req.params.id)
  .then(() => res.redirect('/posts'))
  .catch(err => console.log('ERROR:', err));
}

controller.create=(req, res) =>{
  console.log('inside controller.create', req.body, req.query)
  Posts.save(req.body.posts)
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
Posts.destroy(req.params.id)
.then(() => res.redirect('/posts'))
.catch(err => console.log('ERROR:', err));
}


module.exports = controller
