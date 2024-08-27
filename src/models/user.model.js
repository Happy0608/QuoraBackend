const moongoose=require('mongoose');

const userschema=new moongoose.Schema({
    id:{
        type:Number,
        required:[true,"User have to exist"]
    },
    username:{
        type:String,
        required:[true,"UserName cannot be empty"]
    },
    email:{
        type:String,
        unique:true,
        required:[true,"eamil should be there"]
    },
    bio:{
        type:String
    }
},{
    timestamps:true
})


const userModel=new moongoose.model('User',userschema);

module.exports=userModel;