
const mongoose=require('mongoose');


const AnswerSchema=new mongoose.Schema({
    Q_id:{
        type:Number,
        required:[true,"question id cannot be empty"]
    },
    body:{
        type:String,
        required:[true,"answwer cannnot be empty"]
    },
    User_id:{
        type:Number,
        required:[true,"user_id cannot be empty"]
    },
    liked_by:{
        type:Number,
        required:[true,"User_id cannot be empty"]
    }
});

const answermodel=new mongoose.model('Answer',AnswerSchema);

module.exports=answermodel;