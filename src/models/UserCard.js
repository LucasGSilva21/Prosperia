/**
 * Author: Lucas Gabriel Silva
 * GitHub: https://github.com/LucasGSilva21
 */

const mongoose = require('../database');
const bcrypt = require('bcryptjs');

const UserCardSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true,
    },
    cardId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Card', required: true,
    },
    number: {
        type: String,
        unique: true,
        required: true,
        select: false,
    },
    validThru: {
        type: String,
        required: true,
        select: false,
    },
    securityCode: {
        type: String,
        required: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

UserCardSchema.pre('save', async function(next){
    const hashNumber = await bcrypt.hash(this.number, 8);
    this.number = hashNumber;

    const hashValidThru = await bcrypt.hash(this.validThru, 8);
    this.validThru = hashValidThru;

    const hashSecurityCode = await bcrypt.hash(this.securityCode, 8);
    this.securityCode = hashSecurityCode;

    next();
});

const UserCard = mongoose.model('UserCard', UserCardSchema);

module.exports = UserCard;
