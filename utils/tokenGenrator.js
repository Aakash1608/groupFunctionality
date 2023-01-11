const jwt = require('jsonwebtoken');

const generateAccessToken = (username) => {
    const payload = { username };
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '6m' });
    return accessToken
}
const generateRefreshToken = ({ username }) => {
    const payload = { username };
    const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '5m' });
    return refreshToken
}

module.exports = {
    generateAccessToken,
    generateRefreshToken
}