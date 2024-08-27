class QuestionService{
    constructor(QuestionRepository){
        this.QuestionRepository=QuestionRepository;
    }
    async createQuestion(user_id,title,data){
        try{
            const createquestion=this.QuestionRepository.createQuestion(user_id,topic,data);
        }
        catch(error){
            throw error;
        } 
    }

    async DeleteQuestion(user_id,q_id){
        try {
            const deletequestion=this.QuestionRepository.DeleteQuestion(user_id);
        } catch (error) {
            throw error;
        }
    }

    async getQuestion(findDetails){
        try {
            console.log(findDetails);
            let title_question;
            let topic_question;
            if(findDetails.title){
                    title_question=this.QuestionRepository.getQuestionByTitle(findDetails.title);
                return title_question;   
            }
                if(findDetails.topic){
                    topic_question=this.QuestionRepository.getQuestionByTopic(findDetails.topic);
                    return topic_question;
                }
                let questionlist=Array.from(new Set(title_question.concat(topic_question)));
                        return questionlist;
            } catch (error) {
            throw error;
        }
    }
}
