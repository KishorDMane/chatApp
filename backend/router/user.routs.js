const mongoose = require("mongoose");
const express = require("express");

const {groupModel}=require("../model/men.model")

const GroupRouter=express.Router()


MenRouter.post("/",async(req, res, next) => {

 req.send("user")
})
  module.exports={GroupRouter};