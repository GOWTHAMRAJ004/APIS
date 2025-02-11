exports.hasAllProperties = function (myObject, requiredProperties) {
    try {
        if (!myObject) {
            throw new Error("Object is null or undefined");
        }

        const objectKeys = new Set(Object.keys(myObject));
        const missingProperties = requiredProperties.filter(prop => !objectKeys.has(prop));

        if (missingProperties.length > 0) {
            throw new Error(`Send required data: ${missingProperties.join(', ')}`);
        }
    } catch (error) {
        console.error(error.message); 
        throw error; 
    }
};
