const express = require("express");

const app = express();

app.get("/getUserData", (req, res) => {
  try {
    //* Logic for DB call and get user data

    throw new Error("Not implemented");
    res.send("User data sent!");
  } catch (err) {
    res.status(500).send("Some error contact support team");
  }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    // Log your error
    res.status(500).send("Something went wrong");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
