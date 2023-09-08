/**
 * Add new book
 */
const addBook = `
    INSERT INTO books(
        title,
        author,
        published_at
    ) VALUES ($1,$2,$3) RETURNING id, title, user_id, author, published_at, created_at
`;

const getBookByTitle = `
        SELECT id, title, author, user_id FROM books WHERE title=$1
`;

const getAllBooks = `
        SELECT * FROM books
`

const getSingleBook = `
        SELECT id, title, author, user_id, published_at, created_at
        FROM books WHERE id=$1
`

module.exports = {
    addBook,
    getBookByTitle,
    getAllBooks,
    getSingleBook
}