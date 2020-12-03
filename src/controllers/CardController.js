/**
 * Author: Lucas Gabriel Silva
 * GitHub: https://github.com/LucasGSilva21
 */

const Card = require('../models/Card');

module.exports = {
    getOne: async (req, res) => {
        try{
            const card = await Card.findById(req.params.cardId);

            return res.status(200).json(card);
        } catch (err) {
            return res.status(400).json({ error: err});
        }
    },
    getAll: async (req, res) => {
        try{
            const cards = await Card.find();

            return res.status(200).json(cards);
        } catch (err) {
            return res.status(400).json({ error: err});
        }
    },
    store: async (req, res) => {
        try{
            const card = await Card.create(req.body);

            return res.status(201).json(card);
        } catch (err) {
            return res.status(400).json({ error: err});
        }
    },
    delete: async (req, res) => {
        try{
            await Card.findByIdAndDelete(req.params.cardId);

            return res.status(200).send();
        } catch (err) {
            return res.status(400).json({ error: err});
        }
    },
};
