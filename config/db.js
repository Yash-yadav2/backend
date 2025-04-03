const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://adenaraujox:OTyjnpae58eAIsTE@cluster0.ely3l.mongodb.net/casibom?retryWrites=true&w=majority&appName=Cluster0", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
