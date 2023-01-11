const pool = require('../model/db')
const userController = async(req, res) => {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows)
}

module.exports = { userController }