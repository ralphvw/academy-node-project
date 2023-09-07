const { addUser, findUserByEmail } = require('../queries/users');
const { runQuery } = require('../config/database.config')
const bcrypt = require('bcrypt');


/**
 * Create new user
 */
const createUser = async (body) => {
    const { password, name, email } = body
    // Check if user already exist in db
    const userExist = await runQuery(findUserByEmail, [email])
    if (userExist.length > 0) {
        throw {
            code: 409,
            message: 'User already exists',
            data: null,
            status: 'error'
        }
    }

    // Encrypt password
    const saltRounds = 12;
    const hash = bcrypt.hashSync(password, saltRounds);
    const response = await runQuery(addUser, [name, email, hash, "user"])

    return {
        code: 201,
        status: 'success',
        message: 'New user added successfully',
        data: response[0]
    }
}

module.exports = {
    createUser
}