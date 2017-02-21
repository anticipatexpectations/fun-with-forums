const Comments = require('../../models/comments');

const controller = {};


controller.index=(req, res) =>{
  Comments.findAll()
    .then(data => res.render('posts/index', {comments: data}))
    .catch(err => console.log('ERROR', err));
}

controller.new=(req, res) =>{
  console.log(req.body, req.query);
  res.render('posts/new_post');
}

controller.create=(req, res) =>{
  console.log('inside controller.create', req.body, req.query)
  Comments.save(req.body.posts)
  .then(()=> res.redirect('/posts/'))
  .catch(err => console.log('ERROR:', err));
}

// controller.show=(req, res) =>{
//   Comments.findById(req.params.id)
//   .then(data => res.render('posts/show', {comments: data}))
//   .catch(err => console.log('ERROR:', err));
// }

controller.like=(req, res)=>{
  Comments.like(req.params.id)
  .then(() => {
    if (req.query.show){
    res.redirect(`/posts/${req.params.id}`)
  } else { res.redirect('/posts')}})
  .catch(err => console.log('ERROR:', err));
}


controller.edit=(req, res)=>{
  Comments.findById(req.params.id)
.then(data => res.render('comments/new_comment', {comments: data}))
.catch(err => console.log('ERROR:', err));


}

controller.destroy=(req, res) => {
Comments.destroy(req.params.id)
.then(() => res.redirect('/posts'))
.catch(err => console.log('ERROR:', err));
}



module.exports = controller
