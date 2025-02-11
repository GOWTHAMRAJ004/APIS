const cors = require("cors");
const express = require("express")
const mongoose = require("mongoose")
const product = require("./models/productSchema")
var app = express()
app.get("/",function(request,response){
response.send("Hello World!")
})
app.use(express.json());
app.use(cors());
app.use("/users", require("./functions/users/userFucntions"));
mongoose.connect("mongodb+srv://root:SQbo5nCemakqauCk@cluster0.glzei.mongodb.net/")
.then(()=>{
    app.listen(8085, function () {
        console.log("Started application on port %d", 10000)
        });
}).catch(
    err => console.log("Error occurred:" + err)
)

const products = {
    productDetails: {
        productName: "Smartphone X200",
        manufactureDate: "2024-01-15",
        productId: "PROD123456"
    }
}
