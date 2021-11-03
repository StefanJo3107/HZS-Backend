const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
var cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv/config");

app.use(bodyParser.json());

//import routes
const prijavaRoute = require("./routes/prijava");
const pitanjeRoute = require("./routes/postavipitanje");

//middlewares
app.use("/prijava", prijavaRoute);
app.use("/pitanje", pitanjeRoute);
app.use(
    cors({
        origin: [
            "http://localhost:3000",
            "https://hzs.fonis.rs/4.0",
            "https://stefanjo3107.github.io/HZS-4.0-Site/",
        ],
    })
);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("Connected to db!");
});
