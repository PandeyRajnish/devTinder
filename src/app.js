const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./Models/user");

app.post("/signup", async (req, res) => {
  //* Creating a new instance of the user model
  const user = new User({
    firstName: "Virat",
    lastName: "Kohli",
    emailId: "viratkohli@gmail.com",
    password: "rajnish123",
  });

  try {
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Error saving the user: " + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected!!");
  });
