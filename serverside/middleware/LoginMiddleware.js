const Users = require("../model/Users");

function isEmpty(val) {
  return val === undefined || val == null || val.length <= 0 ? true : false;
}

const loginMiddleware = (schema) => async (req, res, next) => {
  const body = req.body;
  const email = req.body.email;
  const theUser = await Users.find({ email: email });

  try {
    await schema.validate(body);
    if (isEmpty(theUser)) {
      console.log("email does not exist");
      return res.status(400).json({ error: ["email does not exist"] });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error.errors });
  }
};

module.exports = loginMiddleware;
