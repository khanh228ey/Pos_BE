const User = require('../models/user');
const bcrypt = require('bcrypt');

const userController = {

    createUser : async (req, res) => {
        // try {
            const { name,password,phone,email,address,birthday,status } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({ 
                name, password: hashedPassword, phone,email,address,birthday,status,
            });
            await user.save();
            res.status(201).json(user);
        // } catch (error) {
        //     res.status(400).json({ error: 'Không thể tạo user' });
        // }
    }
}
module.exports = userController;