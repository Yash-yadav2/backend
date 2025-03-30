const express = require("express");
const { getAllUsers, updateUserRole, deleteUser } = require("../controllers/adminController");
const { isAuthenticated } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/adminMiddleware");

const router = express.Router();

router.get("/users", isAuthenticated, isAdmin, getAllUsers);
router.put("/users/:id", isAuthenticated, isAdmin, updateUserRole);
router.delete("/users/:id", isAuthenticated, isAdmin, deleteUser);

module.exports = router;
