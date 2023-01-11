const bcrypt = require('bcrypt')
const pool = require('../model/db')

const registerController = async(req, res) => {
    try{
        const { username, password } = req.body
        const hashPwd = await bcrypt.hash(password, 10)
        await pool.query('INSERT INTO users(username, password) VALUES ($1, $2)', [username, hashPwd])
        res.send('user created')
    }catch(err){
        console.error(err.message)
    }
}
module.exports = { registerController }