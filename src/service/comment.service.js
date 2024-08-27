class CommentService{
    constructor(CommentRepostitory){
        this.CommentRepostitory=CommentRepostitory;
    }

    async Comment(user_id,commentdata){
        try {
            const comment=this.CommentRepostitory.Comments(user_id,commentdata);
            return comment;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async editComment(user_id,commentdata){
        try {
            const comment=this.CommentRepostitory.editComment(user_id,commentdata);
            return comment;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async DeleteComment(commentdata){
        const comment=this.CommentRepostitory.DeleteComment(commentdata);
        return comment;
    }
}