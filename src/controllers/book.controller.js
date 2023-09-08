const BookService = require('../services/book.service');

/**
 * Controller function to add new book
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns {JSON} - A JSON response containing the books detail
 */
const createBook = async (req, res, next) => {
    try {
        const result = await BookService.addNewBook(req.body);
        return res.status(result.code).json(result)
    } catch (error) {
        next(error)
    }
}

const fetchAllBooks = async (req, res, next) => {
    try {
        const result = await BookService.retrieveAllBooks();
        return res.status(result.code).json(result)
    } catch (error) {
        next(error)
    }
}

const fetchSingleBook = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await BookService.retrieveSingleBook(id);
        return res.status(result.code).json(result)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createBook,
    fetchAllBooks,
    fetchSingleBook

}