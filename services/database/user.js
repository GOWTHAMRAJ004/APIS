const express = require("express")
const User = require("../../models/userSchema");

exports.createUser = async (data) => {
      const newUser = new User(data); 
      return await newUser.save(); 
  };

  exports.findUser = async (productId) => {
    console.log(productId);
    console.log(await User.findOne({ productId: productId }));
    return await User.findOne({ productId: productId }); 
};

exports.updateUse = async (productId, field, value) => {
   return await User.findOneAndUpdate(
    { productId: productId }, 
            { $set: { [field]: value } }, 
            { new: true }
    );
}

exports.deleteUser = async (productId) => {
    return await User.findOneAndDelete({ productId: productId });
}
exports.getAllUser = async () => {
    return await User.find();
}



