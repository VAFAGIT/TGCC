const express = require("express");
const router = express();
const { CreateFilial , getFilial, getAllFilial } = require("../controllers/FilialesController");

router.get("/", getAllFilial);
router.get("/Filials", getFilial);
router.post("/add", CreateFilial);


module.exports =  router ;

