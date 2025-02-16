const express = require("express");
const {createUser, deleteUser, updateUser, getAllUser, findUserById} = require("../controllers/users/usercontroller");

const router = express.Router();

router.post("/createUser", createUser);
router.get("/getAllUser",getAllUser);
router.put("/updateUser/:userId",updateUser);
router.delete("/deleteUser/:userId", deleteUser);
router.get("/findUserById/:userId", findUserById);

module.exports = router;
