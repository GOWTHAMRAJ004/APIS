const  mongoose = require( "mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_URL, {

    });
    console.log("DB connected");
  } catch (err) {
    console.error("DB connection error:", err);
  }
};

module.exports = connectDB;