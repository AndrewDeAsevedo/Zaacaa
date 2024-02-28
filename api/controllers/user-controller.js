const mongoose = require("mongoose");
const getUser = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "API is working.",
  });
};

const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await hashedPassword(password);

    // create new user object
    const newUser = new User({
      email,
      password: hashedPassword,
      isAdmin: false,
    });
    // Save the user to the database
    await newUser.save();

    // Respond with success
    res.status(201).json("User created successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating the user");
  }
};

module.exports = {
  createUser,
};
