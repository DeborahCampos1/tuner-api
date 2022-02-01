DROP DATABASE IF EXISTS songs;
CREATE DATABASE songs;

\c songs;

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
);
