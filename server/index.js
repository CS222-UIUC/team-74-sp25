const express = require("express");
const SkincareProduct = require("./SkincareProduct");
const cors = require("cors");

let skin_type = "";
let products = [];

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
    skin_type = "";
    products = [];
    res.send("reset");
});

app.post("/skin_type", function (req, res) {
    skin_type = req.body["skin_type"];

    res.send("accepted");
    console.log(skin_type);
});

app.get("/products", function (req, res) {
    res.send(JSON.stringify(products));
});

app.listen(port, () => console.log("Running server on port: " + port));
