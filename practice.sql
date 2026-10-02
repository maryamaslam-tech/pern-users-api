CREATE DATABASE practice;
\c practice;
CREATE TABLE users (
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
email VARCHAR(150) NOT NULL UNIQUE
);
INSERT INTO users (name, email)
VALUES
('ALi', 'ali@example.com'),
('Amna', 'amna@example.com');