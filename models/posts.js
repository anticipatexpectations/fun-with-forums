const db = require('../config/database');
const Post = {};


Post.findAll=()=>{
  return db.manyOrNone(`SELECT * FROM posts ORDER BY p_likes DESC`);
}

Post.save =(gif) => {
  return db.none(`INSERT INTO posts (subject, img_url, p_content) VALUES ($1, $2, $3)`,
  [post.subject, post.img_url, post.p_content])
}

Post.like=(id) => {
  return db.none(`UPDATE posts SET p_likes = p_likes + 1 WHERE id = $1`, [id]);
}


module.exports = Post;
