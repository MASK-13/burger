 CREATE DATABASE burgers_db;
 USE burgers_db;

 -- TABLE BURGERS -- 

 CREATE	TABLE burgers (
 	id int NOT NULL AUTO_INCREMENT,
 	burger_name varchar (50) NOT NUL;
 	devour BOOLEAN default false,
 	date TIMESTAMP);