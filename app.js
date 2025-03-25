const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');
const errorHandler = require('./middleware/errorHandler');
const { initializePassport } = require('./config/passportConfig');
const MongoStore = require('connect-mongo');
const cors = require('cors');


dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000"], // Allow both Vite & Create React App
  credentials: true
}));
app.use(session({
  secret: process.env.SESSION_SECRET || 'secret',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  cookie: { secure: false, httpOnly: true } // Set secure: true in production
}));
app.use(passport.initialize());
app.use(passport.session());

// Initialize Passport
initializePassport(passport);

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Export app for bin/www
module.exports = app;
