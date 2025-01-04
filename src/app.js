const express = require("express");

const app = express();

app.get("/admin/getAllData", (req, res) => {
  // logic for checking if the request is authorized
  const token = "xklaflyz";
  const isAdminAuthorized = token === "xyz";
  if (isAdminAuthorized) {
    res.send("All data sent!");
  } else {
    res.status(401).send("Unauthorized! request");
  }
});

app.get("/admin/deleteUser", (req, res) => {
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (isAdminAuthorized) {
    res.send("User deleted successfully!");
  } else {
    res.status(401).send("Unauthorized! request");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
