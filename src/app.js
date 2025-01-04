const express = require("express");

const app = express();

app.use("/admin", (req, res, next) => {
  console.log("Admin middleware called");
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized request");
  } else {
    next();
  }
});

app.get("/user", (req, res) => {
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
