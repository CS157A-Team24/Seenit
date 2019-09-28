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

