const mongoose = require("mongoose");

const CompanyAccountSchema = new mongoose.Schema({
  bankName: { type: String, required: true },
  accountNumber: { type: String, required: true },
  routingNumber: { type: String },
  balance: { type: Number, default: 0 },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("CompanyAccount", CompanyAccountSchema);
