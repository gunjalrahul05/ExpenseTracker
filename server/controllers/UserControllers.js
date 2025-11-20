const { UserModel } = require("../models/UserModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.userRegistation = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let isExist = await UserModel.findOne({
      email,
    });
    // res.json({ name: name, email: email, password: password });
    const hashPass = await bcrypt.hash(password, 10);
    // console.log(isExist);
    if (!isExist) {
      const user = await UserModel.create({ name, email, password: hashPass });
    } else {
      return res.json({ message: "User already exists" });
    }

    return res.status(201).json({
      message: "Registation successful11",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.userLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.json({ message: "Wrong credentials11" });
  }
  console.log(user);
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.json({ message: "Wrong credentials32" });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },

    process.env.JWT_KEY,
    { expiresIn: "3d" }
  );

  return res.status(201).json({
    message: "Login successful11",
    token,
    user: {
      name: user.name,
      id: user._id,
      email: user.email,
    },
  });
};

exports.createUser = async (req, res) => {
  res.status(201).json({ message: "user created" });
};
