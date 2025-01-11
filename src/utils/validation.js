const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error("Name is not valid!");
  }
  //   else if(firstName.lenght<4 || firstName.length > 50){
  //     throw new Error("First Name should be between 4 and 50 characters long!")
  //   }
  else if (!validator.isEmail(emailId)) {
    throw new Error("Email is not valid!");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Please enter a strong password!");
  }
};

const validateProfileEditData = (req) => {
  const allowedEditFields = [
    "firstName",
    "lastName",
    "emailId",
    "photoUrl",
    "gender",
    "age",
    "about",
    "skills",
  ];

  const isEditAllowed = Object.keys(req.body).every((field) =>
    allowedEditFields.includes(field)
  );

  return isEditAllowed;
};

const validateEditData = (req) => {
  const { firstName, lastName, emailId, photoUrl, about, skills, age, gender } =
    req.body;

  // Validation rules
  if (skills?.length > 50) {
    throw new Error("Skills can't be more than 50!");
  }

  if (about?.length > 200) {
    throw new Error("About field can't be more than 200 characters!");
  }

  if (firstName?.length < 2 || firstName?.length > 50) {
    throw new Error("First Name should be between 2 and 50 characters long!");
  }

  if (lastName?.length < 2 || lastName?.length > 50) {
    throw new Error("Last Name should be between 2 and 50 characters long!");
  }

  if (age < 18 || age > 100) {
    throw new Error("Age should be between 18 and 100!");
  }

  if (!["male", "female", "others"].includes(gender)) {
    throw new Error("Gender data is not valid!");
  }

  if (!validator.isEmail(emailId)) {
    throw new Error("Email is not valid!");
  }

  if (!validator.isURL(photoUrl)) {
    throw new Error("Please enter a valid URL!");
  }
};

module.exports = {
  validateSignUpData,
  validateProfileEditData,
  validateEditData,
};
