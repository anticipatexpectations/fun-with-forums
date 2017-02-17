DROP TABLE if EXISTS posts OR comments;

CREATE TABLE "posts" (
	"id" serial NOT NULL,
	"subject" varchar(255) NOT NULL,
	"img_url" varchar(255) NOT NULL,
	"p_content" varchar(255) NOT NULL,
	"p_likes" integer NOT NULL,
	"num_comments" integer NOT NULL,
	CONSTRAINT posts_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "comments" (
	"id" serial NOT NULL,
	"c_content" varchar(255) NOT NULL,
	"c_likes" integer NOT NULL,
	"post_id" bigserial NOT NULL,
	CONSTRAINT comments_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "comments" ADD CONSTRAINT "comments_fk0" FOREIGN KEY ("post_id") REFERENCES "posts"("id");
