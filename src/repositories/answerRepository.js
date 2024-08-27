const {Answer,Question}=require('../models/index');
const NotFoundError=require('../Error/NotFoundError')

class AnswerRepostitory{

    async  createAnswer(q_id,answerdata) {
        try {
            console.log("this is questin_id",q_id);
            const question=await Question.findById(q_id);
            if(question==null){
                throw new NotFoundError(q_id,"this question does not exits in database");
            }
            const answer=await Answer.create({
                question_id:q_id,
                body:answerdata.body,
                user_id: answerdata.user_id
            })
            return answer;

        } catch (error) {
            console.log(error);
            throw error;
        }
    }


    async updateAnswer(id,answerdata){
        try {
            const updatedanswer=await Answer.findByIdAndUpdate(id,answerdata,{new:true});
            if(updatedanswer==null){
                throw new NotFoundError("answer_id",id,"this is not found");
            }
            return updatedanswer;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports=AnswerRepostitory;