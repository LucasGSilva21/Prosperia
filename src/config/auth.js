require('dotenv/config');

const secrect = process.env.SECRET;
const expire = process.env.EXPIRE;

module.exports = { secrect, expire };
