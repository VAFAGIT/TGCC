const mongoose = require("mongoose");

const filialeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    adress: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        loxercase: true,
        unique: true,
    },


},
{
    timestamps: true,
});

module.exports = mongoose.model("filiales", filialeSchema);