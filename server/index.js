const express = require("express");
const SkincareProduct = require("./SkincareProduct");
const cors = require("cors");

let products = [];

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post("/quiz_answers", function (req, res) {
    //pass the quiz answers into the decision tree to get products

    res.send("accepted");
});

app.get("/products", function (req, res) {
    res.send(JSON.stringify(products));
});

app.listen(port, () => console.log("Running server on port: " + port));
