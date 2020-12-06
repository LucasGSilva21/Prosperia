const User = require('../../models/User');
const Yup = require('yup');

module.exports = {
    exists: async (req, res, next) => {
        try {
            const user = await User.findById(req.params.userId);

            if(!user){
                return res.status(400).json({ error: "User not found" });
            }

            next();
        } catch (e) {
            return res.status(400).json({ error: e.message });
        }
    },
    store: async (req, res, next) => {
        try {
            const { email } = req.body;

            if(await User.findOne({ email })){
                return res.status(400).json({ error: 'User already exists' });
            }

            const schema = Yup.object().shape({
                name: Yup.string().required(),
                email: Yup.string().email().required(),
                password: Yup.string().required(),
                cpf: Yup.string().required(),
                dateBirth: Yup.date().required(),
            });

            await schema.validate(req.body);
     
            next();
        } catch (e) {
            return res.status(400).json({ error: e.message });
        }
    },
};
