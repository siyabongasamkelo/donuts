const Items = require("../model/Items");
const cloudinary = require("../utils/cloudinary");

function isEmpty(val) {
  return val === undefined || val == null || val.length <= 0 ? true : false;
}

module.exports.addItem = async (req, res) => {
  const { name, price, description, quantity, date, cart } = req.body;
  const file = req.files;

  const results = await cloudinary.uploader
    .upload(file.file.tempFilePath)
    .then((data) => {
      const image = data.secure_url;

      const newItem = new Items({
        description: description,
        category: cart,
        price: price,
        image: image,
        quantity: quantity,
        name: name,
        date: date,
        ratings: 0,
      });
      Items.create(newItem)
        .then(() => {
          res.status(200).json("Item added successfully");
        })
        .catch((err) => {
          res.status(400).json(err.message);
        });
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
};

module.exports.getItems = async (req, res) => {
  try {
    const theProducts = await Items.find();
    res.status(200).json(theProducts);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

module.exports.getItem = async (req, res) => {
  const id = req.params.id;

  if (isEmpty(id)) {
    res.status(400).json("item ID required");
  } else {
    try {
      const theProducts = await Items.find({ _id: id });
      res.status(200).json(theProducts);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  }
};
