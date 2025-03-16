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
    },
    updateUser : async (req, res) => {
        try {
            const { name,password,phone,email,address,birthday,status } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = User.findByIdAndUpdate(req.params.id, { 
                name, password: hashedPassword, phone,email,address,birthday,status,
            });
            await user.save();
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: 'Không thể cập nhật user' });
        }
    },
    findOneUser : async (req,res) => {
        const user = await User.findById( req.params.id)
        console.log(user);
        res.status(200).json(user);
    },
    getUser : async (req,res) => {
        try {
            const users = await User.find();
            // console.log('Danh sách users:', users);
            res.status(200).json(users);
        } catch (err) {
            console.error('Lỗi khi lấy danh sách users:', err);
        }
    },
    deleteUser : async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) return res.status(404).json({ error: 'User không tồn tại' });
            res.json({ message: 'Xóa thành công' });
        } catch (error) {
            res.status(500).json({ error: 'Lỗi server' });
        }
    },
}
module.exports = userController;