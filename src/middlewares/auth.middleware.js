const jwt = require('jsonwebtoken');
const config = require('../config/env/index');
const { runQuery } = require('../config/database.config')
const { findUserByEmail } = require('../queries/users');

const verifyToken = async (req, res, next) => {
    const token = req.headers['authorization'];
    try {
        if (!token) {
            return res.status(400).json({
                status: 'error',
                code: 400,
                message: 'Please supply token',
                data: null
            })
        }

        const decoded = jwt.verify(token, config.JWT_SECRET_KEY);
        /*const decoded = {
            id: 2,
            name: 'Sylvia',
            email: 'sylvia@mail.com'
            role: 'admin'
        }
        */
        const { email } = decoded;
        const user = await runQuery(findUserByEmail, [email]);
        if (user.length === 0) {
            throw {
                status: 'error',
                code: 400,
                message: 'User does not exist',
                data: null
            }
        }
        req.decoded = decoded;
        return next()
    } catch (error) {
        return next(error);
    }

}

module.exports =  {
    verifyToken
}




