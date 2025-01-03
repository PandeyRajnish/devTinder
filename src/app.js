const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  console.log(req.query);
  res.send({ firstName: "Rajnish", lastName: "Pandey" });
});

app.get("/user/:userId/:name/:password", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Rajnish", lastName: "Pandey" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
