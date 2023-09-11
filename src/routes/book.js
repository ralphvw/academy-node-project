const express = require('express');
const BookController = require('../controllers/book.controller');
const { verifyToken } = require('../middlewares/auth.middleware');
const { checkIfBookExists } = require('../middlewares/book.middleware');

const router = express.Router();

router.post('/', verifyToken, checkIfBookExists, BookController.createBook);
router.get('/', BookController.fetchAllBooks);
router.get('/:id', BookController.fetchSingleBook);

module.exports = router;
