const Joi = require("joi");

const addSchema = Joi.object({
    name: Joi.string().alphanum().required(),
    email: Joi.string().email().required(),
    phone: Joi.number().required(),
  });

  module.exports = {
    addSchema,
}