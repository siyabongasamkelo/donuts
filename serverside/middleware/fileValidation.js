const fileValidation = async (req, res, next) => {
  const files = req.files;

  function isEmpty(val) {
    return val === undefined || val == null || val.length <= 0 ? true : false;
  }

  if (isEmpty(files)) {
    console.log("there is no file");
    return res.status(400).json("please select an image");
  } else {
    next();
  }
};

module.exports = fileValidation;
