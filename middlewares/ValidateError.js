const Joi = require("joi");

const postSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean().optional(),
});

const putSchema = Joi.object({
  name: Joi.string().optional(),
  email: Joi.string().email().optional(),
  phone: Joi.string().optional(),
  favorite: Joi.boolean().optional(),
});


const validateAdd = (req, res, next) => {
  const { error } = postSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "missing required name field" });
  }
  next();
};

const validateUpdate = (req, res, next) => {
  const { error } = putSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "missing required name field" });
  }
  next();
};

const favoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
})

const favoriteValidator = (req, res, next) => {
  const { error } = favoriteSchema.validate(req.body);
  if (error) {
    return res.status(400).json({"message": "missing field favorite"});
  }
  next();

};


module.exports = {
  validateAdd,
  validateUpdate,
  favoriteValidator
};
