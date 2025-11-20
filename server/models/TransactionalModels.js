const mongoose = require("mongoose");

const TransactionalSchema = require("../schemas/TransactionSchema");

const TransactionalModel = mongoose.model("transactions", TransactionalSchema);

module.exports = { TransactionalModel };
