const express = require("express");
const router = express();
const { CreateProjet , getProjet, getAllProjet } = require("../controllers/ProjetController");

router.get("/", getAllProjet);
router.get("/Projets", getProjet);
router.post("/add", CreateProjet);


module.exports =  router ;

