CREATE TABLE clients (
 id SERIAL PRIMARY KEY,
 name VARCHAR(80),
 email VARCHAR(50),
 phone INT,
 address VARCHAR(150),
 notes VARCHAR(250)
 );

 INSERT INTO clients (name , email, phone, address, notes)
 VALUES ('Bob Marley', 'bobmarley@gmail.com', 5555555, '123 Oak St. St. Paul, Minnesota, 55104', 'this guy rocks');
