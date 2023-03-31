const express = require("express");
const router = express();
const { CreateEmployee , getEmployee, getAllEmployee } = require("../controllers/EmployeeController");

router.get("/", getAllEmployee);
router.get("/Employees", getEmployee);
router.post("/add", CreateEmployee);


module.exports =  router ;

