DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS comments;

CREATE TABLE "posts" (
	"id" serial NOT NULL,
	"subject" varchar(255) NOT NULL,
	"img_url" varchar(255) NOT NULL,
	"p_content" varchar(255) NOT NULL,
	"p_likes" integer NOT NULL,
	"num_comments" integer NOT NULL
);


CREATE TABLE "comments" (
	"id" serial NOT NULL,
	"c_content" varchar(255) NOT NULL,
	"c_likes" integer NOT NULL,
	"post_id" integer NOT NULL
);
