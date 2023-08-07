const express = require("express");
const authenticate = require("../../middlewares/authenticate");
const router = express.Router();

const {
  getAll,
  getById,
  removeById,
  add,
  updateById,
  updateStatusContact
} = require("../../controllers/contacts");

const {
  validateAdd,
  validateUpdate,
  favoriteValidator
} = require("../../middlewares/ValidateError")

// получение всего списка
router.get("/", authenticate, getAll);

// получение по id
router.get("/:contactId", authenticate, getById);

// // добавление
router.post("/", authenticate, validateAdd, add);

// // удаление по id
router.delete("/:contactId", authenticate, removeById);

// // изменение по id
router.put('/:contactId', authenticate, validateUpdate, updateById)

router.patch("/:contactId/favorite", authenticate, favoriteValidator, updateStatusContact)


module.exports = router;
