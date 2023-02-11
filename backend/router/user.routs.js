const mongoose = require("mongoose");
const express = require("express");

const { GroupModel } = require("../model/user.model")

const GroupRouter = express.Router()


GroupRouter.post("/", async (req, res) => {
  let payload = req.body;

  const group = await GroupModel.findOne({group_name:payload.group_name});
  if (!group) {
    GroupModel.insertMany(payload);

    res.send({ "msg": "group created succesfully" });

  } else {
    res.send({ "msg": "Group Exisist" });
  } 

});

GroupRouter.get("/", async (req, res) => {
  const groups = await GroupModel.find({});
  res.send(groups);
});


module.exports = { GroupRouter };