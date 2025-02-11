

const mongoose = require("mongoose");

const schema = mongoose.Schema;

const productSchema = new schema({
    orderId: {
        type: String,
        required: true,
        unique: true, 
    },
    userId: {
        type: String,
        required: true,
       
    },
    productDetails: {
        productName: {
            type: String,
            required: true,
        },
        manufactureDate: {
            type: String, 
            required: true,
        },
        productId: {
            type: String,
            required: true,
        },
    },
}, {
    timestamps: true, 
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;