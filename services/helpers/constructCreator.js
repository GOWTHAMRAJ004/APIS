exports.constructCreateUser = (data) => {
    
    const {
        userId,
        name,
        address,
        creditPoints,
        phoneNumber,
    } = data;


    return {
        userId: userId,
        name:name,
        address:address,
        creditPoints:creditPoints,
        phoneNumber:phoneNumber,
    }
}

exports.constructCreateProduct = (data) => {

    const { orderId, userId, productDetails = {} } = data; 
    const { productName, manufactureDate, productId } = productDetails;

    return {
        orderId:orderId,
        userId:userId,
        productDetails:{
            productName:productName,
            manufactureDate:manufactureDate,
            productId:productId
        }
    }
}
