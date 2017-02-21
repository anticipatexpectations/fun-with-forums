const db = require('../config/database');
const Comments = {};


Comments.findAll=()=>{
  return db.manyOrNone(`SELECT * FROM comments ORDER BY c_likes DESC`);
}


Comments.findById = (id) => {
  return db.one(`SELECT * FROM comments WHERE id = $1`,[id]);
}

Comments.save =(comments) => {
  console.log('inside comments model', comments);
  return db.none(`INSERT INTO comments (subject, img_url, c_content, c_likes, num_comments) VALUES ($1, $2, $3, $4, $5)`,
  [comments.subject, comments.img_url, comments.c_content, comments.c_likes, comments.num_comments])
}

// Gif.update = (gif, id) => {
//   return db.none(`UPDATE gifs SET name = $1, url = $2 WHERE id = $3`,
//     [gif.subject, gif.c_content, id]);
// }


Comments.like=(id) => {
  return db.none(`UPDATE comments SET c_likes = c_likes + 1 WHERE id = $1`, [id]);
}

Comments.destroy = (id) => {
  return db.none(`DELETE FROM comments WHERE id = $1`, [id]);
}


module.exports= Comments;
