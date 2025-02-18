const express = require("express");
const { hasAllProperties } = require("../../services/helpers/hasAllProperties");
const { constructCreateUser } = require("../../services/helpers/constructCreator");
const { createUserParams } = require("../../services/helpers/parameterChecks");
const { createUser, getAllUser, deleteUser, findUser, updateUser } = require("../../services/database/user");
const user = require("../../models/userSchema");

const router = express.Router();

exports.createUser =  async (req, res) => {
    try {
        const { body } = req;
        console.log();
        hasAllProperties(body, createUserParams);
       
        const newUser = constructCreateUser(body);
      
        const existingUser = await user.findOne({ userId: newUser.userId });
      
        if (existingUser) {
            return res.status(409).json({
                 error: "User with this ID already exists" 
                });
        }
        const savedUser = await createUser(newUser);
        return res.status(201).json({
             message: "User created successfully",
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
        console.error("Error fetching users:", error.message);
        return res.status(500).json({
            error: error.message || "Internal Server Error"
        });
    }
};

 exports.deleteUser = async (req, res) => {
     try {
            const { userId } = req.params;
            console.log(userId);
            const existingUser = await findUser(userId);
            console.log(existingUser);
    
            if (!existingUser) {
                return res.status(404).json({ error: "User not found" });
            }
    
            const users = await deleteUser(userId); 
            console.log(users);
            return res.status(200).json("User deleted sucessfully"); 
        } catch (error) {
            console.error("Error fetching users:", error.message);
            return res.status(500).json({
                error: error.message || "Internal Server Error"
            });
        }
    };
exports.updateUser =  async (req, res) => {
    try {
        const { userId } = req.params;
        const {field, value} = req.body;
        const updatedUser = await updateUser(userId, field, value);
        
        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.status(200).json({ message: "User updated successfully", user: updatedUser });

    } catch (error) {
        console.error("Error updating user:", error.message);
        return res.status(500).json({ error: error.message || "Internal Server Error" });
    }
};

exports.findUserById = async (req, res) => {
    try {
        const {userId} = req.params;
        const users = await findUser(userId); 
        console.log(users);
        return res.status(200).json(users); 
    } catch (error) {
        console.error("Error fetching users:", error.message);
        return res.status(500).json({
            error: error.message || "Internal Server Error"
        });
    }
};

