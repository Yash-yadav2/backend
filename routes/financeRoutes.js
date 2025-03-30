const express = require("express");
const {
  getAllTransactionsForFinance,
  updateUserBankDetails,
  getCompanyAccount,
  updateCompanyAccount,
  markTransactionReceivedFinance,
} = require("../controllers/financeController");
const { isAuthenticated } = require("../middleware/authMiddleware");
const { isFinance } = require("../middleware/financeMiddleware");

const router = express.Router();

router.get("/transactions", isAuthenticated, isFinance, getAllTransactionsForFinance);
router.put("/users/:id/bank", isAuthenticated, isFinance, updateUserBankDetails);
router.get("/company-account", isAuthenticated, isFinance, getCompanyAccount);
router.put("/company-account", isAuthenticated, isFinance, updateCompanyAccount);
router.put("/transactions/:id/receive", isAuthenticated, isFinance, markTransactionReceivedFinance);

module.exports = router;
