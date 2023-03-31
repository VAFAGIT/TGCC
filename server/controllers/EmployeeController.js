const Employee = require("../models/employee");


//Create employee and save
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a employee
    const employee = new Employee({
        name: req.body.name,
        phone: req.body.phone,
        naissance: req.body.naissance,
        email: req.body.email,
        password: req.body.password,
    });

    // Save employee in the database
    employee
        .save(employee)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the employee.",
            });
        });
}

// Retrieve all employees from the database.
exports.findAll = (req, res) => {

    Employee.find()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving employees.",
            });
        });
}

// find one employee
exports.findOne = (req, res) => {
    const id = req.params.id;

    Employee.findById(id)
        .then((data) => {
            if (!data)
                res.status(404).send({ message: "Not found employee with id " + id });
            else res.send(data);
        })
        .catch((err) => {
            res
                .status(500)
                .send({ message: "Error retrieving employee with id=" + id });
        });
}












