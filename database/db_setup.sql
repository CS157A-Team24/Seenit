CREATE TABLE Post (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(256),
  time DATETIME,
  points INT,
  content VARCHAR
);

CREATE TABLE User (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(128)
);

CREATE TABLE Channel (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(64),
  description VARCHAR
);

CREATE TABLE Create (
  user_id INT,
  post_id INT
);
