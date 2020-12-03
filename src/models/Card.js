/**
 * Author: Lucas Gabriel Silva
 * GitHub: https://github.com/LucasGSilva21
 */

const mongoose = require('../database');

const CardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    points: {
        type: Number,
        required: true,
    },
    annuity: {
        type: Number,
        unique: true,
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

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;
