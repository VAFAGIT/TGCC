const Projet = require("../models/projet");

// Create and Save a new Projet
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }
    
    // Create a Projet
    const projet = new Projet({
        name: req.body.name,
        phone: req.body.phone,
        adress: req.body.adress,
        email: req.body.email,
        date: req.body.date,
        filiale: req.body.filiale,
        
    });
    
    // Save Projet in the database
    Projet.create(projet, (err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Projet."
        });
        else res.send(data);
    });
    }
