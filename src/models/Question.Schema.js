
const mongoose=require('mongoose');


const QuestionSchema=new mongoose.Schema({
    User_id:{
        type:Number,
        required:[true,"user id cannot be empty"]
    },
    title:{
        type:String,
        required:[true,"title cannot be empty"]
    },
    body:{
        type:String,
        required:[true,"question cannot be empty"]
    },
    TopicTags:[
        {
            type:String
        }
    ],
},
    {
        timestamps:true
    })

const questionmodel=new mongoose.model('Question',QuestionSchema);
module.exports=questionmodel;