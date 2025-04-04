import express, { json } from "express";
import axios from "axios";
import SkincareProduct from "./SkincareProduct.cjs";

let products = [];

var app = express();

app.get("/", function (req, res) {
  res.send("Hello world!");
});

app.post("/products", function (req, res) {
  let data = req.query.hello;
  //pass the quiz answers into the decision tree to get products
  if ((data = "bye")) {
    products.push(new SkincareProduct());
  }

  res.send("bye");
});

app.get("/products", function (req, res) {
  res.send(JSON.stringify(products));
});

app.listen(3000);
