CREATE DATABASE todoapp;

CREATE TABLE todos (
    id VARCHAR(255) PRIMARY KEY,
    user_email VARCHAR(255),
    title VARCHAR(255),
    progress INT,
    date VARCHAR(300)
);

CREATE TABLE user (
    email VARCHAR(255) PRYMARY KEY,
    hashed_password VARCHAR(255)
);
