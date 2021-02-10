DROP DATABASE supermarket;
CREATE DATABASE supermarket;

USE supermarket;

CREATE TABLE cart (
  id INT NOT NULL,
  description VARCHAR(150) NOT NULL,
  image VARCHAR(300) NOT NULL,
  name VARCHAR(10) NOT NULL,
  price FLOAT NOT NULL,
  price_id VARCHAR(150) NOT NULL,
  quantity INT NOT NULL,
  PRIMARY KEY (id)
);

/* add this line 
 * createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
 * if care about when item was added */

/*  Execute this file from the command line by typing:
 *    mysql -u root < supermarket.sql
 *  to create the database and the tables. */