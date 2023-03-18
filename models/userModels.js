const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: false},
    lasstName: { type: String, required: false},
    email: { type: String, required: false},
    portfolio: { type: String, required: false},
    carrierObjective: { type: String, required: false},
    education:[],
    skills:[],
    experience:[],
    projects:[]
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;