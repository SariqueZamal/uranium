const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const createUser = async function (req, res) {

  try {
    let data = req.body;

    if (Object.keys(data).length != 0) {
      let savedData = await userModel.create(data);
      res.status(201).send({ msg: savedData });
    }
     else res.status(400).send({ msg: "BAD REQUEST" });
  } 
  catch (err) {
    res.status(500).send({ msg: "Error", error: err.message });
  }
};

const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;

    let user = await userModel.findOne({emailId: userName, password: password});
    if (!user)
      return res.status(400).send({status: false, msg: "username or the password is not correct"});

    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "uranium",
        organisation: "FUnctionUp",
      },
      "functionup-uranium"
    );
    // res.setHeader("x-auth-token", token);
    res.status(201).send({ status: true, data: token });
  } catch (err) {
    res.status(500).send({ msg: "Error", error: err.message });
  }
};

const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.status(400).send({ status: false, msg: "No such user exists" });

    res.status(200).send({ status: true, data: userDetails });
  } catch (err) {
    res.status(500).send({ msg: "Error", error: err.message });
  }
};

const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);

    if (!user) {
      return res.status(400).send("No such user exists");
    }

    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
    res.status(201).send({ status: updatedUser, data: updatedUser });

  } catch (err) {
    res.status(500).send({ msg: "Error", error: err.message });
  }
};

const deletedUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);

    if (!user) {
      return res.status(400).send("No such user exists");
    }
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true }});
    res.status(201).send({ status: updatedUser, data: updatedUser });

  } catch (err) {
    res.status(500).send({ msg: "Error", error: err.message });
  }
};


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deletedUser = deletedUser;
// module.exports.authorizedUser = authorizedUser;
