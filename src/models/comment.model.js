const mongoose=require('mongoose');

const  commentSchema=new mongoose.Schema({
    parent_id:{
        type:Number,
        required:[true,""]
    },
    parent:{
        type:String,
        enum:['answer','parent_id']
    },
    body:{
        type:String,
        required:[true,"content cannot be empty"]
    },
    User_id:{
        type:Number,
        required:[true,"cannot"]
    },
    likedby:[{
        type:Number,
        require:[true,"it can be liked by user only"]
    }]
},{
    timestamps:true
});


const commentModel=new mongoose.model('Comment',commentSchema);
module.exports=commentModel;

