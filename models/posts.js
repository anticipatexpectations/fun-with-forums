const db = require('../config/database');
const Posts = {};


Posts.findAll=()=>{
  return db.manyOrNone(`SELECT * FROM posts ORDER BY p_likes DESC`);
}

Posts.save =(posts) => {
  return db.none(`INSERT INTO posts (subject, img_url, p_content) VALUES ($1, $2, $3)`,
  [posts.subject, posts.img_url, posts.p_content])
}

Posts.like=(id) => {
  return db.none(`UPDATE posts SET p_likes = p_likes + 1 WHERE id = $1`, [id]);
}

Posts.destroy = (id) => {
  return db.none(`DELETE FROM posts WHERE id = $1`, [id]);
}


module.exports = Posts;
