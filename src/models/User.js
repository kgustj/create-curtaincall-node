const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: false,
        },
        gender: {
            type: String,
            required: false,
        },
    },
    {
        timeStamps: true,
    },
);

module.exports = UserSchema;