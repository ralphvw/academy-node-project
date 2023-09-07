/**
 * Add New User
 */
const addUser = `
  INSERT INTO users(
    name,
    email,
    password,
    role
  )
  VALUES ($1,$2,$3,$4) RETURNING id, name, email, role, created_at
`;

const findUserByEmail = `
 SELECT name, email, role FROM users WHERE email=$1
`

module.exports = {
    addUser,
    findUserByEmail
}