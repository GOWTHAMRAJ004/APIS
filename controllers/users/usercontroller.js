const express = require("express");
const { hasAllProperties } = require("../../services/helpers/hasAllProperties");
const { constructCreateUser } = require("../../services/helpers/constructCreator");
const { createUserParams } = require("../../services/helpers/parameterChecks");
const { createUser, getAllUser, deleteUser, findUser, updateUse } = require("../../services/database/user");
const user = require("../../models/userSchema");

const router = express.Router();

exports.createUser =  async (req, res) => {
    try {
        const { body } = req;
        console.log();
        hasAllProperties(body, createUserParams);
       
        const newUser = constructCreateUser(body);
      
        const existingUser = await user.findOne({ productId: newUser.productId });
      
        if (existingUser) {
            return res.status(409).json({
                 error: "product with this ID already exists" 
                });
        }
        const savedUser = await createUser(newUser);
        return res.status(201).json({
             message: "product created successfully",
              user: savedUser });

    } catch (error) {
        console.error("Error creating user:", error.message);
        return res.status(400).json({
             error: error.message || "Invalid request" });
    }
};


exports.getAllUser =  async (req, res) => {
    try {
        const users = await getAllUser(); 
        return res.status(200).json(users); 
    } catch (error) {
        console.error("Error fetching product:", error.message);
        return res.status(500).json({
            error: error.message || "Internal Server Error"
        });
    }
};

 exports.deleteUser = async (req, res) => {
     try {
            const { productId } = req.params;
            console.log(productId);
            const existingUser = await findUser(productId);
            console.log(existingUser);
    
            if (!existingUser) {
                return res.status(404).json({ error: "product not found" });
            }
    
            const product = await deleteUser(productId); 
            console.log(product);
            return res.status(200).json("product deleted sucessfully"); 
        } catch (error) {
            console.error("Error fetching users:", error.message);
            return res.status(500).json({
                error: error.message || "Internal Server Error"
            });
        }
    };
exports.updateUser =  async (req, res) => {
    try {
        const { productId } = req.params;
        const {field, value} = req.body;
        const updatedUser = await updateUse(productId, field, value);
        
        if (!updatedUser) {
            return res.status(404).json({ error: "product not found" });
        }

        return res.status(200).json({ message: "product updated successfully", user: updatedUser });

    } catch (error) {
        console.error("Error updating user:", error.message);
        return res.status(500).json({ error: error.message || "Internal Server Error" });
    }
};

exports.findUserById = async (req, res) => {
    try {
        const {productId} = req.params;
        const users = await findUser(productId); 
        console.log(users);
        return res.status(200).json(users); 
    } catch (error) {
        console.error("Error fetching users:", error.message);
        return res.status(500).json({
            error: error.message || "Internal Server Error"
        });
    }
};

