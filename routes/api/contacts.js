const express = require("express");

const router = express.Router();

const {
  getAll,
  getById,
  removeById,
  add,
  updateById
} = require("../../controllers");

// получение всего списка
router.get("/", getAll);

// получение по id
router.get("/:contactId", getById);

// добавление
router.post("/", add);

// удаление по id
router.delete("/:contactId", removeById);

// изменение по id
router.put('/:contactId', updateById)


module.exports = router;
