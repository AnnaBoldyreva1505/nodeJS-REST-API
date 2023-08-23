const express = require("express");
const validateBody = require("../../middlewares/validateBody");
const authenticate = require("../../middlewares/authenticate");
const ctrlWrapper = require("../../middlewares/ctrlWrapper");
const { schemas } = require("../../models/user");
const {
  registerCtrl,
  loginCtrl,
  getCurrent,
  logout,
  updateAvatar,
  verify,
  resendEmail,
} = require("../../controllers/auth");
const { upload } = require("../../middlewares/uploadAvatar");
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
router.get("/current", authenticate, ctrlWrapper(getCurrent));
router.get("/logout", authenticate, ctrlWrapper(logout));
// router.patch('/users/:id/subscription', authenticate, validateBody(schemas.subscriptionSchema), ctrlWrapper(ctrl.subscription))

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(updateAvatar)
);


router.get("/verify/:verificationToken", ctrlWrapper(verify))

router.post("/verify", validateBody(schemas.verifyEmailSchema), ctrlWrapper(resendEmail))


module.exports = router;
