/**
 * Author: Lucas Gabriel Silva
 * GitHub: https://github.com/LucasGSilva21
 */

const UserCard = require('../models/UserCard');

module.exports = {
    getOne: async (req, res) => {
        try{
            const userCard = await UserCard.findById(req.params.userCardId);

            return res.status(200).json(userCard);
        } catch (err) {
            return res.status(400).json({ error: err});
        }
    },
    getAll: async (req, res) => {
        try{
            const usersCards = await UserCard.find();

            return res.status(200).json(usersCards);
        } catch (err) {
            return res.status(400).json({ error: err});
        }
    },
    store: async (req, res) => {
        try{
            const userCard = await UserCard.create(req.body);

            userCard.number = undefined;
            userCard.validThru = undefined;
            userCard.securityCode = undefined;

            return res.status(201).json(userCard);
        } catch (err) {
            return res.status(400).json({ error: err});
        }
    },
    delete: async (req, res) => {
        try{
            await UserCard.findByIdAndDelete(req.params.userCardId);

            return res.status(200).send();
        } catch (err) {
            return res.status(400).json({ error: err});
        }
    },
};
