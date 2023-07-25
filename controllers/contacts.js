const contacts = require("../models/contacts");
// const Joi = require("joi");

// const addSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().required(),
//   phone: Joi.string().required(),
// });

const getAll = async (req, res) => {
  const result = await contacts.listContacts();
  res.json(result);
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await contacts.getContactById(contactId);
  contact
    ? res.status(200).json(contact)
    : res.status(404).json({ message: "Contact not found" });
};

const add = async (req, res) => {
//   const { error } = addSchema.validate(req.body);

//   if (error) {
//     return res.status(400).json({ message: "missing required name field" });
//   }

  const newContact = await contacts.addContact(req.body);
  res.status(201).json(newContact);
};

const removeById = async (req, res) => {
  const { contactId } = req.params;
  const updateContacts = await contacts.removeContact(contactId);

  if (!updateContacts) {
    res.status(200).json({ message: "Contact deleted" });
  } else {
    res.status(404).json({ message: "Not found" });
  }
};

const updateById = async (req, res) => {
//   const { error } = addSchema.validate(req.body);
//   if (error) {
//     res.status(400).json({ message: "Missing fields." });
//   }

  const { contactId } = req.params;
  const updatedContact = await contacts.updateContact(contactId, req.body);

  if (updatedContact) {
    res.status(200).json(updatedContact);
  } else {
    res.status(404).json({ message: "Not found" });
  }
};

module.exports = {
  getAll,
  getById,
  add,
  removeById,
  updateById,
};
