const express = require("express");
const dotenv = require("dotenv");
const connectDB  = require("./config/config");
const router = require("./routers/userRouter");
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router); 



// Default Route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Connect to DB & Start Server
const startServer = async () => {
  try {
    await connectDB(); 
    app.listen(8085, () => {
      console.log("Started application on port 8086");
    });
  } catch (err) {
    console.error("Error occurred while connecting to DB:", err);
    process.exit(1); 
  }
};

startServer();
