const express = require("express");
const User = require("../models/userModels");
const app = express.Router();

app.post("/login", async (req, res) => {
    try {
      const result = await User.findOne({
        username: req.body.username,
        password: req.body.password,
      });
  
      if(result.length){
        res.send("Login Successful")
      }
    } catch (error) {
      res.status(400).json(error);
    }
  });

  app.post("/register", async (req, res) => {
    try {
      const newuser = new User(req.body);
      await newuser.save();
  
      res.send("Registration Successfull");
    } catch (error) {
      res.status(400).json(error);
    }
  });
  

  
  module.exports = app;