const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const Users = require("../model/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const maxAage = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, `${process.env.JWTSECRETE}`, {
    expiresIn: maxAage,
  });
};

module.exports.register = async (req, res) => {
  const file = req.files;
  const { password, email, username } = req.body;

  const results = await cloudinary.uploader
    .upload(file.file.tempFilePath)
    .catch((err) => {
      res.status(400).json("an error occured while uploading your photo");
      return;
    });
  let imageLink = results.secure_url;

  const newUser = new Users({
    password: password,
    email: email,
    username: username,
    image: imageLink,
  });

  await Users.create(newUser)
    .then(() => {
      res.status(400).json("user successfully registered");
    })
    .catch((err) => {
      res.status(400).json("please make sure no field is empty");
    });
};

module.exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const theUser = await Users.find({ email: email });
  // const theStore = await Store.find({ email: email });

  console.log("on the user part");
  const auth = await bcrypt.compare(password, theUser[0].password);
  if (auth) {
    const token = createToken(theUser[0].id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAage * 1000 });
    req.session = theUser;

    res
      .status(200)
      .send({ auth: true, token: token, result: theUser, auther: "user" });
  } else {
    res.status(400).json("incorrect email/password");
  }

  // console.log("on the store part");
  // const auth = await bcrypt.compare(password, theStore[0].password);
  // if (auth) {
  //   const token = createToken(theStore[0].id);
  //   res.cookie("jwt", token, { httpOnly: true, maxAge: maxAage * 1000 });
  //   req.session = theStore;

  //   res.send({ auth: true, token: token, result: theStore, auther: "store" });
  // } else {
  //   res.json("incorrect email/password");
  // }
};
