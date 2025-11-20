const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/UserRoutes");
const TransactionRoutes = require("./routes/TransactionRoutes");
const app = express();

const PORT = 4000;

app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  return res.json({ message: "get the request" });
});

//routes
app.use("/", userRoutes);
app.use("/", TransactionRoutes);

app.listen(PORT, () => {
  console.log("App Started");
});
