create database seenit;

use seenit;

CREATE TABLE users_v0
(
  id INT,
  user_name VARCHAR(255),
  email VARCHAR(255),
  created_at DATETIME,
  points INT,
  PRIMARY KEY (id)
);

INSERT INTO users_v0
VALUES(0, 'test', 'test@gmail.com', '2019-09-05 14:29:36', 30);

CREATE TABLE posts
(
  id INT,
  title VARCHAR(255),
  content TEXT,
  at_channel VARCHAR(255),
  created_at DATETIME,
  created_by VARCHAR(255),
  updated_at DATETIME,
  points INT,
  PRIMARY KEY (id)
);

INSERT INTO posts VALUES(0,"test post 0","Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia ante sed sapien dignissim, id luctus orci lobortis.",
					"test_channel","2019-10-05 22:29:36","tester","2019-10-05 22:29:36",4);