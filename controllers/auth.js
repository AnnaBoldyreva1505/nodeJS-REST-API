const bcrypt = require("bcryptjs");
const { User } = require("../models/user");
const RequestError = require("../middlewares/RequestError");
const { SECRET_KEY } = process.env;
const jwt = require("jsonwebtoken");

const registerCtrl = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const result = await User.create({ name, email, password: hashPassword });
  res.status(201).json({
    name: result.name,
    email: result.email,
  });
};

const loginCtrl = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw RequestError(401, "Email or password wrong");
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw RequestError(401, "Email or password wrong");
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
  await User.findByIdAndUpdate(user._id, { token });
  res.json({
    token,
  });
};

const getCurrent = async (req, res) => {
  const { email, subscription } = req.user;
  return res.status(200).json({ email, subscription });
};

const logout = async(req, res)=> {
  const {_id} = req.user;
  await User.findByIdAndUpdate(_id, {token: ""});

  res.json({
      message: "Logout success"
  })
}

module.exports = {
  loginCtrl,
  registerCtrl,
  getCurrent,
  logout,
};
