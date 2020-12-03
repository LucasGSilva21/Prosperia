/**
 * Author: Lucas Gabriel Silva
 * GitHub: https://github.com/LucasGSilva21
 */

const User = require('../models/User');

module.exports = {
    getOne: async (req, res) => {
        try{
            const user = await User.findById(req.params.userId);

            return res.status(200).json(user);
        } catch (err) {
            return res.status(400).json({ error: err});
        }
    },
    getAll: async (req, res) => {
        try{
            const users = await User.find();

            return res.status(200).json(users);
        } catch (err) {
            return res.status(400).json({ error: err});
        }
    },
    store: async (req, res) => {
        try{
            const user = await User.create(req.body);

            user.password = undefined;

            return res.status(201).json(user);
        } catch (err) {
            return res.status(400).json({ error: err});
        }
    },
    delete: async (req, res) => {
        try{
            await User.findByIdAndDelete(req.params.userId);

            return res.status(200).send();
        } catch (err) {
            return res.status(400).json({ error: err});
        }
    },
};
