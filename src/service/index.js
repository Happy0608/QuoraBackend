const AnswerService = require('./Answer.Service');

module.exports={
    CommentService:require('../service/comment.service'),
    AnswerService:require('../service/Answer.Service'),
    topicService:require('../service/topic.service'),
    QuestionService:require('../service/Question.Service'),
    UserService:require('../service/User.Service'),
    likeService:require('../service/like.service')
}