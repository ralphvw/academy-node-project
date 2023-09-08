const express = require('express');
const BookController = require('../controllers/book.controller')

const router = express.Router();

router.post('/', BookController.createBook);
router.get('/', BookController.fetchAllBooks);
router.get('/:id', BookController.fetchSingleBook);

module.exports = router

