/* Replace with your SQL commands */
CREATE TYPE role_type AS ENUM('user', 'admin', 'super_admin');
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name varchar(100),
    email varchar(100) UNIQUE,
    password varchar(60),
    role role_type,
    created_at timestamptz DEFAULT NOW(),
    updated_at timestamptz DEFAULT NOW()
)