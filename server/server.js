const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;
const dbconfig = require("./config/db");

app.use(cors());
app.use(express.json());


app.use("/api/employees", require("./routes/employeeRoutes"));
app.use("/api/auth", require("./routes/AuthRoutes"));

//listen to port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);

module.exports = app;