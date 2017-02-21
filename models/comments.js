const db = require('../config/database');
const Comments = {};


Comments.findAll=()=>{
  return db.manyOrNone(`SELECT * FROM comments ORDER BY c_likes DESC`);
}

//
// Comments.findById = (id) => {
//   return db.one(`SELECT * FROM comments WHERE id = $1`,[id]);
// }
//
// Comments.save =(comments) => {
//   console.log('inside comments model', comments);
//   return db.none(`INSERT INTO comments ( c_content, c_likes) VALUES ($1, $2 )`,
//   [comments.c_content, comments.c_likes ])
// }
//
//
// Comments.update = (comments, id) => {
//   return db.none(`UPDATE comments SET c_content = $1, WHERE id = $2`,
//     [comments.c_content, id]);
// }
//


// Comments.like=(id) => {
//   return db.none(`UPDATE comments SET c_likes = c_likes + 1 WHERE id = $1`, [id]);
// }

// Comments.destroy = (id) => {
//   return db.none(`DELETE FROM comments WHERE id = $1`, [id]);
// }


module.exports= Comments;
