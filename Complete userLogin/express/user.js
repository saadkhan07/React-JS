const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,   // ensures email is unique in the database
        trim: true,     // removes whitespace
        lowercase: true // converts email to lowercase
    },
    password: {
        type: String,
        required: true,
    }
});

// Create a model based on the schema
const UserB = mongoose.model('UserB', userSchema);

module.exports = UserB;
