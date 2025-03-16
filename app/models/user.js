const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String, required: true,trim: true, 
    },
    phone: {
        type: String, required: true,trim: true, 
    },
    email: {
        type: String, required: true,trim: true,
    },
    password: {
        type: String, required: true,
    },
    address: {
        type: String, required: true,
    },
    birthday: {
        type: String
    },
    status: {
        type: Number,
    }
}, 
{
    timestamps: true,
    versionKey: false 
});
const User = mongoose.model('user', userSchema);
module.exports = User;