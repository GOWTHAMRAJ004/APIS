const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
    userId: { 
        type: String, 
        required: true, 
        unique: true 
    },
    name: { 
        type: String, 
        required: true 
    },
    address: { 
        type: String, 
        required: true 
    },
    creditPoints: { 
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