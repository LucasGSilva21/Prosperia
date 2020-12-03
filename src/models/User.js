/**
 * Author: Lucas Gabriel Silva
 * GitHub: https://github.com/LucasGSilva21
 */

const mongoose = require('../database');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    cpf: {
        type: String,
        unique: true,
        required: true,
    },
    dateBirth: {
        type: Date,
        required: true,
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

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 8);
    this.password = hash;

    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
