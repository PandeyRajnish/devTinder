const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./Models/user");
const { validateSignUpData } = require("./utils/validation");

app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    //* Validation of data
    validateSignUpData(req);

    //* Encrypt the password

    //* Creating a new instance of the user model
    const user = new User(req.body);
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Error : " + err.message);
  }
});

//* Get user by email
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  try {
    const user = await User.findOne({ emailId: userEmail });
    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

//* Get user by Id
app.get("/getUserById/:id", async (req, res) => {
  const userId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).send("Invalid user ID");
  }

  try {
    const user = await User.findById({ _id: userId });
    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(404).status("User not found");
  }
});

//* Feed API - GET /feed - get all the users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
});

app.delete("/user", async (req, res) => {
  const userId = req.body.userId;

  try {
    const user = await User.findByIdAndDelete({ _id: userId });
    res.send("User deleted successfully!!");
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;

  try {
    const ALLOWED_UPDATES = [
      "userId",
      "photoUrl",
      "about",
      "gender",
      "age",
      "skills",
    ];

    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k)
    );

    if (!isUpdateAllowed) {
      throw new Error("Update not allowed");
    }

    if (data?.skills.length > 10) {
      throw new Error("Skills can't be more than 10");
    }

    await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
      runValidators: true,
    });
    res.send("User updated successfully!!");
  } catch (err) {
    res.status(400).send("UPDATE FAILED!! " + err.message);
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
