const db = require('../config/database');
const Posts = {};


Posts.findAll=()=>{
  return db.manyOrNone(`SELECT * FROM posts ORDER BY p_likes DESC`);
}

Posts.save =(posts) => {
  console.log('inside posts model', posts);
  return db.none(`INSERT INTO posts (subject, img_url, p_content, p_likes, num_comments) VALUES ($1, $2, $3, $4, $5)`,
  [posts.subject, posts.img_url, posts.p_content, posts.p_likes, posts.num_comments])
}

Posts.like=(id) => {
  return db.none(`UPDATE posts SET p_likes = p_likes + 1 WHERE id = $1`, [id]);
}

Posts.destroy = (id) => {
  return db.none(`DELETE FROM posts WHERE id = $1`, [id]);
}


module.exports = Posts;
