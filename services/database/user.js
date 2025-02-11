const express = require("express")
const User = require("../../models/userSchema");

exports.createUser = async (data) => {
      const newUser = new User(data); 
      return await newUser.save(); 
  };

  exports.findUser = async (userId) => {
    return await User.findOne({ userId: userId }); 
};

exports.updateUser = async (userId, field, value) => {
   return await User.findOneAndUpdate(
    { userId: userId }, {[field] : value}, {new : true}
    );
}

exports.deleteUser = async (userId) => {
    return await User.findOneAndDelete({ userId: userId });
}
exports.getAllUser = async () => {
    return await User.find();
}



