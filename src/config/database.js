const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://rajnish:rajnish1997@node.p2xuw.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
