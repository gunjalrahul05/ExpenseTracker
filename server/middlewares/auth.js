const { json } = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  try {
    let token = req.header("Authorization");
    if (!token) {
      return res
        .status(401)
        .json({ message: "You don't have access of these page" });
    }

    if (token.startsWith("Bearer ")) {
      token = token.split(" ")[1]; // get only the toke
    }
    const decode = jwt.verify(token, process.env.JWT_KEY);

    req.user = decode;

    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid Token", error: error.message });
  }
};
