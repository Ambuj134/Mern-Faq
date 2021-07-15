const express = require("express");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const helmet = require("helmet");
const faqRoute = require("./routes/faqs");
var cors = require("cors");

dotenv.config();

mongoose.connect("mongodb://localhost/Accordion", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection
  .once("open", () => console.log("connected"))
  .on("error", (err) => console.log("your error:", err));

// middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/faqs", faqRoute);

app.listen(5000, () => {
  console.log("Server is running");
});
