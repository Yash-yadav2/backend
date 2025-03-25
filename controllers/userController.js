const getUserProfile = (req, res) => {
    res.json(req.user);
};

const updateUserProfile = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.user._id, req.body, { new: true, runValidators: true });
        res.json({ message: 'Profile updated successfully', user: updatedUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getUserProfile, updateUserProfile };