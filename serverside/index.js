const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
dotenv.config();
const fileupload = require("express-fileupload");

//     middlewares
app.use(express.json());
app.use(cors());
app.use(fileupload({ useTempFiles: true }));

//   mongodb connection
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGODBCONNECTION);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongodb database connection established successfuly");
});

//auth routes
app.use("/add", require("./routes/Register"));
app.use("/login", require("./routes/Login"));

//item routes
app.use("/add", require("./routes/addItem"));
app.use("/get", require("./routes/getItems"));

app.listen(process.env.PORT, () => {
  console.log(`running on port ${process.env.PORT}`);
});
