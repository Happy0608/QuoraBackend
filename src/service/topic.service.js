class TopicService{
    constructor(TopicRepository){
        this.TopicRepository=TopicRepository;
    }

    async createTopic(user_id,data_topic){
        try {
            const topic=await this.TopicRepository.createTopic(user_id,data_topic);
            return topic;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteTopic(user_id,data_topic){
        try {
            const deletetopic=this.TopicRepository.deleteTopic(user_id,data_topic);
            return deletetopic;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getTopic(user_id){
            try {
                const topics=await this.TopicRepository.getTopic(user_id);
                return topics;
            } catch (error) {
                console.log(error);
                throw error;
            }
    }
}

module.exports=TopicService;