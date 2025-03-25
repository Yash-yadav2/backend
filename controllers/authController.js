const User = require('../models/User');
const registerUser = async (req, res) => {
    try {
        console.log(req.body);  // Debugging: Check if email is present

        const { firstName, lastName, email, phoneNumber, countryCode, currency, isAdult, termsAccepted, password } = req.body;
        
        if (!email) return res.status(400).json({ message: "Email is required" });
        if (!termsAccepted) return res.status(400).json({ message: "You must accept the terms and conditions" });

        const user = new User({ firstName, lastName, email, phoneNumber, countryCode, currency, isAdult, termsAccepted });
        await User.register(user, password);

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const loginUser = (req, res) => {
    res.json({ message: 'Logged in successfully' });
};

const logoutUser = (req, res, next) => {
    req.logout(function(err) {
        if (err) return next(err);
        res.json({ message: 'Logged out successfully' });
    });
};


module.exports = { registerUser, loginUser, logoutUser };