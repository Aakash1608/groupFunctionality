const bcrypt = require('bcrypt')
const pool = require('../model/db')
const { generateAccessToken, generateRefreshToken } = require('../utils/tokenGenrator')

const loginController = async(req, res) => {
    try{
        const { username, password } = req.body;
        const result = await pool.query('SELECT * FROM users WHERE username = $1', [username])
        if(result.rowCount == 0) return res.json({ 'msg': 'No data' })
        const hashPwd = result.rows[0].password;
        const comparePwd = await bcrypt.compare(password, hashPwd)

        const accessToken = generateAccessToken(username)
        res.send(accessToken)
    }catch(err){
        console.error(err.message)
    }
}
module.exports = { loginController }