const answer=require('./answer.model');
const question=require('./Question.Schema');
const Topic=require('./Topic.model');
const User=require('./user.model');
const comment=require('./comment.model');

module.exports={
    Answer:answer,
    Question:question,
    Topic:Topic,
    User:User,
    Comment:comment
}