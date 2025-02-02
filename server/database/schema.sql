CREATE TABLE user (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  email VARCHAR(60),
  password VARCHAR(100),
  avatar VARCHAR(100) DEFAULT "/assets/images/favicon.png"
);

INSERT INTO user (email, password)
  VALUES
    ("jean@hotmail.com", "password");