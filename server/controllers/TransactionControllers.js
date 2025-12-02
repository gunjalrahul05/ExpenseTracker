const mongoose = require("mongoose");
const { TransactionalModel } = require("../models/TransactionalModels");

exports.AddTransaction = async (req, res) => {
  const { title, amount, type, date, description } = req.body;
  const id = req.user.id;
  console.log(req.user.id);
  try {
    console.log("here");
    const transaction = await TransactionalModel.create({
      title,
      amount,
      type,
      date,
      description,
      user: id,
    });

    console.log("Insertion SuccessFul");

    console.log("Insertion Successful");

    return res.status(201).json({
      success: true,
      transaction,
      message: "Data Added Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error Occurred",
      error: error.message,
    });
  }
};

exports.GetTransaction = async (req, res) => {
  try {
    const id = req.user.id; // or from req.body
    console.log(id);
    const data = await TransactionalModel.find({ user: id });

    if (!data) {
      return res.status(404).json({ message: "No data found" });
    }

    return res.status(200).json({ data, message: "Data fetched successfully" });
  } catch (error) {
    return res.status(400).json({ message: "Failed", error: error.message });
  }
};

exports.UpdateTransaction = async (req, res) => {
  try {
    const updates = req.body;
    const updatedData = await TransactionalModel.updateMany(
      { user: req.params.id },
      { $set: updates }
    );

    return res.status(200).json({
      message: "Update successful",
      updatedData,
    });
  } catch (error) {
    return res.status(400).json({
      message: "update failed",
      error,
    });
  }
};

exports.DeleteTransaction = async (req, res) => {
  const id = req.params.id;

  try {
    const dele = await TransactionalModel.deleteMany({ user: id });

    if (!dele) {
      return res.status(200).json({ message: "Data not found" });
    }

    return res.status(200).json({ message: "Delete Successfully", dele });
  } catch (error) {
    return res.status(400).json({ message: "Error " });
  }
};
