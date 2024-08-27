const AnswerRepository=require('../repositories/answerRepository');
const AnswerService=require('../service/Answer.Service');




const Answer=new AnswerService(new AnswerRepository);

function pingAnswer(req,res){
    return res.json({
        message:"this is answerping"
    })
}

async function postAnswer(req,res,next) {
    try {
        const answer=await Answer.cerateAnswer(req.params.id,req.body)
        return res.json({
            sucess:true,
            message:"succefully added to answer",
            error:{},
            data:answer,

        })
    } catch (error) {
        next(error);
    }
}


async function updateAnswer(req,res,next) {
    try {
        const updateanswer=await Answer.updateAnswer(req.params.id,req.body);
        return res.json({
            sucess:true,
            message:"Answer Updated",
            error:{},
            data:updateAnswer
        })
    }catch(error){
        next(error);
    }
}

module.exports={
    pingAnswer:pingAnswer,
    postAnswer:postAnswer,
    updateAnswer:updateAnswer
}