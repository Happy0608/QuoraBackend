const { StatusCodes } = require('http-status-codes');
const BaseError=require('./BaseError');


class NotFound extends BaseError{
    constructor(propertyName,data,details){
        super(StatusCodes.NOT_FOUND,`this propery ${propertyName} with value ${data} does not exits`,
            details)
    }
}

module.exports=NotFound;