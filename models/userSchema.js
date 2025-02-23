const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
    productId: { 
        type: String, 
        required: true, 
        unique: true 
    },
    productName: { 
        type: String, 
        required: true 
    },
    ShippingAddress: { 
        type: String, 
        required: true 
    },
    discount: { 
        type: Number, 
        default: 0 
    },
    phoneNumber: { 
        type: String, 
        unique: true 
    },
    orderHistory: { 
        type: [mongoose.Schema.Types.Mixed], 
        default: [] 
    },
    currentOrders: { 
        type: [mongoose.Schema.Types.Mixed], 
        default: [] 
    }
}, {
    timestamps: true 
});


const User = mongoose.model('users', userSchema);

module.exports = User;