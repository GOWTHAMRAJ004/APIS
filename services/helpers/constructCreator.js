exports.constructCreateUser = (data) => {
    
    const {
        productId,
        productName,
        ShippingAddress,
        discount,
        phoneNumber,
    } = data;


    return {
        productId: productId,
        productName:productName,
        ShippingAddress: ShippingAddress,
        discount: discount,
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
