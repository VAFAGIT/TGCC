const mongoose = require("mongoose");

const ProjetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    filiale: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "filiales",
        required: true,
    },
    employees: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "employees",
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    dateFin: {
        type: Date,
        required: true,
    },


},
{
    timestamps: true,
});

module.exports = mongoose.model("projets", ProjetSchema);