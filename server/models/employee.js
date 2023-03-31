const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    naissance: {
        type: Date,
        required: true,
    },
    email: {
        type: String,
        required: true,
        loxercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
},
{
    timestamps: true,
});

module.exports = mongoose.model("employees", employeeSchema);