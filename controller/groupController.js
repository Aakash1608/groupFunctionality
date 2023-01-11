const pool = require('../model/db')
const createGroup = async(req, res) => {
    try {
        const { groupName } = req.body;
        const result = await pool.query('SELECT * FROM groups WHERE name = $1', [groupName])
        if(result.rowCount !== 0) return res.status(404).json({ msg: "group name already exists" })
        const memberLimit = 4;
        const user = req.user.username;
        await pool.query('INSERT INTO groups (name, users, memberlimit) VALUES ($1, $2, $3)', [groupName, [user], memberLimit])
        res.send('group created')
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
const joinGroup = async(req, res) => {
    try {
        const { groupName } = req.body;
        const result = await pool.query('SELECT * FROM groups WHERE name = $1', [groupName])
        if(result.rowCount === 0) return res.status(404).json({ msg: "No such group" })
        const limit = result.rows[0].memberlimit;
        const existingMem = result.rows[0].users;
        const user = req.user.username;
        if(existingMem.includes(user)) return res.status(401).json({msg: 'User is alredy added'})
        if(existingMem.length >= limit) return res.json({msg: 'Group is full'})
        const allUsers = [...existingMem, user]
        await pool.query('UPDATE groups SET users = $1 WHERE name = $2', [allUsers, groupName])
        res.json({ msg: "user added" })
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = { createGroup, joinGroup }