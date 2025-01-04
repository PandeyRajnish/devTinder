const adminAuth =
  ("/admin",
  (req, res, next) => {
    console.log("Admin middleware called");
    const token = "xyz";
    const isAdminAuthorized = token === "xyz";
    if (!isAdminAuthorized) {
      res.status(401).send("Unauthorized request");
    } else {
      next();
    }
  });

const userAuth =
  ("/user",
  (req, res, next) => {
    console.log("User Middleware called");
    const token = "abc";
    const isUserAuthorized = token === "abcd";
    if (!isUserAuthorized) {
      res.status(401).send("Unauthorized user request");
    } else {
      next();
    }
  });

module.exports = {
  adminAuth,
  userAuth,
};
