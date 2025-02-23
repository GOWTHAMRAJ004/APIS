const express = require("express");
const {createUser, deleteUser, updateUser, getAllUser, findUserById} = require("../controllers/users/usercontroller");

const router = express.Router();

router.post("/createProduct", createUser);
router.get("/getAllProducts",getAllUser);
router.put("/updateProduct/:productId",updateUser);
router.delete("/deleteproduct/:productId", deleteUser);
router.get("/findProductById/:productId", findUserById);

module.exports = router;
