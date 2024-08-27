class AnswerService{
    constructor(AnswerRepository){
        this.AnswerRepository=AnswerRepository;
    }

    async cerateAnswer(q_id,answerdata){
        try{
            const answer= this.AnswerRepository.createAnswer(q_id,answerdata);
            return answer;
        }
        catch(error){
            console.log(error);
            throw error;
        }
        
    }
    async updateAnswer(id,answerdata){
        try {
            const updatedanswer= this.AnswerRepository.updateAnswer(id,answerdata);
            return updatedanswer;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports=AnswerService;