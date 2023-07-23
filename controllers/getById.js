const contacts = require("../models/contacts")

const getById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await contacts.getContactById(contactId);
  contact
    ? res.status(200).json(contact)
    : res.status(404).json({ message: "Contact not found" });
};

module.exports = getById;
