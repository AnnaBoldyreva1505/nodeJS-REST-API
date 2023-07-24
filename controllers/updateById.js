const Joi = require("joi");
const contacts = require("../models/contacts");

const addSchema = Joi.object({
  name: Joi.string().alphanum().required(),
  email: Joi.string().email().required(),
  phone: Joi.number().required(),
});


const updateById = async(req, res)=> {
    const { error } = addSchema.validate(req.body);
    if (error) {
        res.status(400).json({ message: "Missing fields." });
      }

    const {contactId} = req.params;
    const updatedContact = await contacts.updateContact(contactId, req.body);

    updatedContact ?  res.status(200).json(updatedContact) : res.status(404).json({ message: "Not found" });  

}

module.exports = updateById;
