const express = require("express");
const validateBody = require("../../middlewares/validateBody");
const authenticate = require("../../middlewares/authenticate");
const ctrlWrapper = require("../../middlewares/ctrlWrapper");
const { schemas } = require("../../models/user");
const { registerCtrl, loginCtrl, getCurrent, logout } = require("../../controllers/auth");
const router = express.Router();
// signup
router.post(
  "/register",
  validateBody(schemas.registerSchema),
  ctrlWrapper(registerCtrl)
);
// signin
router.post(
  "/login",
  validateBody(schemas.loginSchema),
  ctrlWrapper(loginCtrl)
);
router.get("/current", authenticate, ctrlWrapper(getCurrent))
router.get("/logout", authenticate, ctrlWrapper(logout))
// router.patch('/users/:id/subscription', authenticate, validateBody(schemas.subscriptionSchema), ctrlWrapper(ctrl.subscription))
module.exports = router;