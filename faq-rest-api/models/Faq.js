const mongoose = require("mongoose");

const FaqSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      require: true,
    },
    answer: {
      type: String,
      require: true,
    },
    remark: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Faq", FaqSchema);
