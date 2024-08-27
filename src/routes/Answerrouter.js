const express=require('express');
const {pingAnswer,postAnswer,updateAnswer}=require('../controller/answer.controller');
const routes=express.Router();

routes.use('/',(req,res,next)=>{
    console.log("coming inside routes folder");
    next();
})

routes.use('/pingAnswer',pingAnswer);

routes.use('/postAnswer',postAnswer);

routes.use('/updateAnswer',updateAnswer);

module.exports=routes;


