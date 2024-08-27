class likeService{
    constructor(likeRepository){
        this.likeRepository=likeRepository;
    }

    async createlike(user_id,data){
        try {
            const like=this.likeRepository.createlike(data);
            return like;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}