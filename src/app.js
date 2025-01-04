const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./Models/user");

app.post("/signup", async (req, res) => {
  //* Creating a new instance of the user model
  const user = new User({
    firstName: "Piyush",
    lastName: "Pandey",
    emailId: "pandeypiyush@gmail.com",
    password: "rajnish123",
  });

  await user.save();
  res.send("User added successfully");
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
