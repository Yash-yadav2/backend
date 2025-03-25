const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    phoneNumber: String,
    countryCode: String,
    currency: String,
    isAdult: Boolean,
    termsAccepted: Boolean,
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
});

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = mongoose.model('User', UserSchema);