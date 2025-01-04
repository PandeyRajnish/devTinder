const express = require("express");

const app = express();

//* GET /users => middleware chain => request handles
app.use("/", (req, res, next) => {
  console.log("Handling the route user");
  // res.send("Handling the route user")
  next();
});

app.get(
  "/user",
  (req, res, next) => {
    next();
  },
  (req, res, next) => {
    next();
  },
  (req, res, next) => {
    res.send("Hello from the server!");
  }
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
