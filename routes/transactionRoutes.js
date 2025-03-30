const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../middleware/authMiddleware");
const {
  createTransaction,
  getAllTransactions,
  getUserTransactions,
  updateTransactionStatus
} = require("../controllers/transactionController");

// 🔹 **User Transactions**
router.post("/create", isAuthenticated, createTransaction);
router.get("/user", isAuthenticated, getUserTransactions);

// 🔹 **Admin Routes**
router.get("/all", isAuthenticated, getAllTransactions);
router.put("/update/:id", isAuthenticated, updateTransactionStatus);

module.exports = router;
