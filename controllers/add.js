const Joi = require("joi");
const contacts = require("../models/contacts");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

const add = async (req, res) => {
  const { error } = addSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ "message": "missing required name field" });
  }

  const newContact = await contacts.addContact(req.body);
  res.status(201).json(newContact);
};

module.exports = add;