const { Schema, model } = require("mongoose");
const Joi = require("joi");

const emailRegexp = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
const allowedSubscriptions = ["starter", "pro", "business"];

const userSchema = Schema({
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 6,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: emailRegexp,
  },
  subscription: {
    type: String,
    enum: allowedSubscriptions,
    default: "starter"
  },
  token: {
    type: String,
    default: null,
  },
  avatarURL: {
    type: String,
    required: true,
  }
});

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

// const subscriptionSchema = Joi.object({
//   subscription: Joi.string().valid(...allowedSubscriptions).required(),
// });

const schemas = {
  registerSchema,
  loginSchema,
  // subscriptionSchema,
};

const User = model("user", userSchema);
module.exports = { User, schemas };



// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDE1Mjc0YThhNDY1ZDhiNjZhNDRkOCIsImlhdCI6MTY5MTQ0MDM3MywiZXhwIjoxNjkxNTI2NzczfQ.5znmG5q1kXqvac31T_mZLmWuXUZU0MU1xah05giaTLc