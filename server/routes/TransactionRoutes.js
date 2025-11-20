const express = require("express");

const {
  AddTransaction,
  GetTransaction,
  UpdateTransaction,
  DeleteTransaction,
} = require("../controllers/TransactionControllers");

const auth = require("../middlewares/auth");
const router = express.Router();

router.post("/add", auth, AddTransaction);
router.get("/get", auth, GetTransaction);
router.put("/update/:id", auth, UpdateTransaction);
router.delete("/delete/:id", auth, DeleteTransaction);

module.exports = router;
