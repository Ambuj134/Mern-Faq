const joi = require("@hapi/joi");

const authSchema = joi.object({
  question: joi.string().min(5).max(100).required(),
  answer: joi.string().min(5).max(1000).required(),
  remark: joi.string().min(5).max(100),
});
module.exports = { authSchema };
