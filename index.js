
var uacCategory = require('./uac.json');

/**
 * To check Access control based on apiType & userType
 * @param {Integer} userTypeId 
 * @param {String} moduleName 
 * @param {String} apiType 
 */

module.exports = function () {
    validate = async (userTypeId, moduleName, apiType) => {
        try {
            return (uacCategory[moduleName] && uacCategory[moduleName][apiType] && uacCategory[moduleName][apiType].indexOf(userTypeId)>=0) || false;
        } catch (exception) {
            exception = exception.message || exception;
            return { error: exception }
        }
    }
    return {  validate };
}