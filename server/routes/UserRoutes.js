const express = require("express");
const {
  userRegistation,
  userLogin,
  createUser,
} = require("../controllers/UserControllers");

const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/registration", userRegistation);

router.post("/login", userLogin);

router.post("/create", auth, createUser);

module.exports = router;
