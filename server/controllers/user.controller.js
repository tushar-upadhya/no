const userModel = require("../models/user.model");
const userService = require("../services/user.servic");
const { validationResult } = require("express-validator");

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { fullname, email, password } = req.body;

    // Hash the password
    const hashedPassword = await userModel.hashedPassword(password);

    // Create user
    const user = await userService.createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
    });

    // Generate token
    const token = user.generateAuthToken();

    res.status(201).json({ token, user });
  } catch (err) {
    console.error("Register User Error:", err);
    res.status(500).json({ error: err.message || "Server error" });
  }
};
