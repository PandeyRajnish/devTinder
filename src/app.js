const express = require("express");

const app = express();

//* this will only handle the GET call to /user
app.get("/user", (req, res) => {
  res.send({ firstName: "Rajnish", lastName: "Pandey" });
});

app.post("/user", (req, res) => {
  //* saving data to DB
  res.send("Data successfully saved to database");
});

app.delete("/user", (req, res) => {
  res.send("Data successfully deleted from database");
});

//* this will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
