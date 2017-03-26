 -- Clients table
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

 -- Jobs table
CREATE TABLE jobs (
	id SERIAL PRIMARY KEY,
	status VARCHAR(120),
	task_1 VARCHAR(400),
	task_2 VARCHAR(40),
	tasks_cost int,
	materials VARCHAR(300),
	materials_cost int,
	total_cost int,
	date VARCHAR(60),
	client_id INT REFERENCES clients
);

INSERT INTO jobs (status , task_1, task_2, tasks_cost, materials, materials_cost, total_cost, date, client_id)
VALUES ('complete', 'paint pool table/bar room', 'paint office/bedroom', 350, '1 gallon new color 1 gallon white flat (for ceiling)', 150, 500, '2/9/2017', 1);

SELECT clients.name, jobs.id
FROM clients
INNER JOIN jobs
ON clients.id=jobs.client_id;
