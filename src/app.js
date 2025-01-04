const express = require("express");

const app = express();

const { adminAuth } = require("./middlewares/auth");
const { userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.get("/user", userAuth, (req, res) => {
  res.send("User data sent!");
});

app.post("/user/login", (req, res) => {
  res.send("Login successful!");
});

app.get("/user/data", userAuth, (req, res) => {
  res.send("User data sent!");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All data sent!");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("User deleted successfully!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
