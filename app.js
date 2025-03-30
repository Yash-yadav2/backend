const express = require("express");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Session Configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET || "default_secret",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true }, // Adjust based on your environment
  })
);

// Initialize Passport.js
require("./config/passportConfig");
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/transactions", require("./routes/transactionRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/finance", require("./routes/financeRoutes"));
app.use("/api/user", require("./routes/userRoutes"));

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

// Export the app module
module.exports = app;
