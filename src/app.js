const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res, next) => {
    console.log("Handling the route user");
    // res.send("Response");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user 2");
    // res.send("Response 2");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user 3");
    // res.send("Response 3");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user 4");
    res.send("Response 4");
  }
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
