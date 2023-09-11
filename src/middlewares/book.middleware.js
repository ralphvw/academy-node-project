const { runQuery } = require('../config/database.config');
const { getBookByTitle } = require('../queries/books');

const checkIfBookExists = async (req, res, next) => {
  try {
    const { title } = req.body;
    const book = await runQuery(getBookByTitle, [title]);
    if (book.length > 0) {
      throw {
        code: 409,
        status: 'error',
        message: 'Book already exist',
        data: null,
      };
    }
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  checkIfBookExists,
};
