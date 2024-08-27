const BaseError=require('./BaseError');
const {Statuscode, StatusCodes}=require('http-status-codes');

class badrequest extends BaseError{
    constructor(propetyname,details){
        super("BadRequest",StatusCodes.BAD_REQUEST,`invalid structure for ${propetyname}`,details);
    }
}

module.exports=badrequest;