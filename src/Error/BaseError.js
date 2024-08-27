class BaseError extends Error{
    constructor(name,statuscode,description,details){
        this.name=name;
        this.statuscode=statuscode;
        this.description=description;
        this.details=details;
        console.log(details);
    }
}


module.exports=BaseError;