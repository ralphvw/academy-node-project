const {
  addBook,
  getAllBooks,
  getSingleBook,
} = require('../queries/books');
const { runQuery } = require('../config/database.config');

/**
 * Add new book
 */
const addNewBook = async (body) => {
  const { title, author } = body;
  const published_at = new Date();
  const result = await runQuery(addBook, [title, author, published_at]);
  return {
    code: 201,
    status: 'success',
    message: 'New book added successfully',
    data: result[0],
  };
};

/**
 * Get all books
 */
const retrieveAllBooks = async () => {
  const data = await runQuery(getAllBooks);
  return {
    code: 200,
    status: 'success',
    message: 'Books fetched successfully',
    data,
  };
};

/**
 * Get Single Book
 */
const retrieveSingleBook = async (id) => {
  const result = await runQuery(getSingleBook, [id]);
  return {
    code: 200,
    status: 'success',
    message: 'Single book fetched successfully',
    data: result[0],
  };
};

module.exports = {
  addNewBook,
  retrieveAllBooks,
  retrieveSingleBook,
};
