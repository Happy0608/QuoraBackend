const {Question} =require('../models/Question.Schema');


class QuestionService{
    async createQuestion(data){
        try {
            const genratedquestion=await Question.create({
                id:data.id,
                data_titile:data.title,
                data_body:data.body,
                data_topic:data.topic,
                data_user_id:data.Userid
            })
            return genratedquestion;
        } catch (error) {
            
        }
    }

    async getquestion(data){
        try {
            const question=await Question.find({titile_id:data.title});
            return question;
        } catch (error) {
            
        }
        
    }

    async DeleteQuestion(data){
        try {
            const deletequestion=await Question.deleteOne({id:data.id});
            return deletequestion;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports=QuestionService;