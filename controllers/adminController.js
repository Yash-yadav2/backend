const User = require('../models/User');
const getAllUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

const deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted successfully' });
};

module.exports = { getAllUsers, deleteUser };
