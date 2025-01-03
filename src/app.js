const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("Hello from the server!");
});

app.use("/hello/2", (req, res) => {
  res.send("Hello from the server 2");
});
app.use("/hello", (req, res) => {
  res.send("Hello rounte");
});

app.use("/", (req, res, next) => {
  res.send("Home route");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
