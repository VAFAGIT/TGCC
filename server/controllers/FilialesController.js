const Filiale = require("../controllers/FilialesController");

// Create and Save a new Filiale
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }
    
    // Create a Filiale
    const filiale = new Filiale({
        name: req.body.name,
        phone: req.body.phone,
        adress: req.body.adress,
        email: req.body.email,
    });
    
    // Save Filiale in the database
    Filiale.create(filiale, (err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Filiale."
        });
        else res.send(data);
    });
    }


// Retrieve all Filiales from the database.
exports.findAll = (req, res) => {
    Filiale.getAll((err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving Filiales."
        });
        else res.send(data);
    });
    }

// Find a single Filiale with a FilialeId
exports.findOne = (req, res) => {
    Filiale.findById(req.params.filialeId, (err, data) => {
        if (err) {
        if (err.kind === "not_found") {
            res.status(404).send({
            message: `Not found Filiale with id ${req.params.filialeId}.`
            });
        } else {
            res.status(500).send({
            message: "Error retrieving Filiale with id " + req.params.filialeId
            });
        }
        } else res.send(data);
    });
    }
    