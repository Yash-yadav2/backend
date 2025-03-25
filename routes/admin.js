const express = require('express');
const { getAllUsers, deleteUser } = require('../controllers/adminController');
const { isAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/users', isAdmin, getAllUsers);
router.delete('/users/:id', isAdmin, deleteUser);

module.exports = router;