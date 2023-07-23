const contacts = require("../models/contacts")

const add = async (req, res) => {
  const newContact = await contacts.addContact(req.body);
  res.status(201).json(newContact);
};

module.exports = add;
