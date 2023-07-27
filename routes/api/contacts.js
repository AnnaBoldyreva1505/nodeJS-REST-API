const express = require("express");
const router = express.Router();

const {
  getAll,
  getById,
  removeById,
  add,
  updateById
} = require("../../controllers/contacts");

const {
  validateAdd,
  validateUpdate,
} = require("../../middlewares/ValidateError")

// получение всего списка
router.get("/", getAll);

// получение по id
router.get("/:contactId", getById);

// добавление
router.post("/", validateAdd, add);

// удаление по id
router.delete("/:contactId", removeById);

// изменение по id
router.put('/:contactId', validateUpdate, updateById)


module.exports = router;
