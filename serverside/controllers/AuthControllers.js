const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const Users = require("../model/Users");

module.exports.register = async (req, res) => {
  const file = req.files;
  const { password, email, username } = req.body;

  const results = await cloudinary.uploader
    .upload(file.file.tempFilePath)
    .catch((err) => {
      res.json("an error occured while uploading your photo");
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
      res.json("user successfully registered");
    })
    .catch((err) => {
      res.json("please make sure no field is empty");
    });
};
