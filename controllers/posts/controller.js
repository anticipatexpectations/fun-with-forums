const Posts = require('../../models/posts');
const Comments = require('../../models/comments');

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
  .then(postData => {
    Comments
    .findAllByPostId(req.params.id)
    .then(commentData => res.render('posts/show', {
      posts: postData,
      comments: commentData
    }))
  })
  .catch(err => console.log('ERROR:', err));
}

// controller.commentsPlusOne = (req, res)=>{
// Posts.commentsPlusOne(req.params.id)
// .then(data => res.redirect(`/posts/${req.params.id}`))
// .catch(err => console.log('ERROR:', err));
// }


controller.createComment=(req, res) =>{
  Comments.createComment(req.body.comments, req.params.id)
  .then(data => {
    Posts.commentsPlusOne(req.params.id)
    .then(data => res.redirect(`/posts/${req.params.id}`))
  })
  .catch(err => console.log('ERROR:', err));
}

// controller.createComment=(req, res) =>{
//   Comments.
//   createComment(req.body.comments, req.params.id)
//   .then(data => res.redirect('/posts/' + req.params.id))
//   .catch(err => console.log('ERROR:', err));
// }


controller.like=(req, res)=>{
  Posts.like(req.params.id)
  .then(() => {
    if (req.query.show){
    res.redirect(`/posts/${req.params.id}`)
  } else { res.redirect('/posts')}})
  .catch(err => console.log('ERROR:', err));
}

controller.clike=(req, res)=>{
  Comments.clike(req.params.post_id, req.params.id)
  .then((data) => {
    console.log(req.query.show, 'here is a string');
    res.redirect(`/posts/${req.params.post_id}`)
})
  .catch(err => console.log('ERROR:', err));
}

controller.destroy=(req, res) => {
  Comments.destroy(req.params.id)
  .then(() => {
    Posts.destroy(req.params.id)
    .then(() => res.redirect('/posts'))
  })
  .catch(err => console.log('ERROR:', err));
}


module.exports = controller
