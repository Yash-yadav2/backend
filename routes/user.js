const express = require('express');
const { getUserProfile, updateUserProfile } = require('../controllers/userController');
const { isAuthenticated } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/profile', isAuthenticated, getUserProfile);
router.put('/profile', isAuthenticated, updateUserProfile);

module.exports = router;