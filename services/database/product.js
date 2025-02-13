const product = require("../../models/productSchema");

exports.createproduct = async (data) => {
      const newproduct = new product(data); 
      return await newproduct.save(); 
  };

exports.findProduct = async (id) => {
    return await  product.findById(id);
};

exports.updateProduct = async (field, value) => {
   return await product.findByIdAndUpdate(
        id, {[field] : value}, {new : true}
    );
}

exports.deleteProduct = async (id) => {
    return await product.findByIdAndDelete(id);
}



