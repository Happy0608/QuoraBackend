const express=require('express');
const bodyparaser=require('body-parser');
const ServerConfig=require('./config/ServerConfig');
const Dbconnect=require('./config/moongoose.config');
const routes=require('./routes/Answerrouter');

const app=express();
const Port=3000;

app.use(bodyparaser.json());
app.use(bodyparaser.urlencoded());
app.use(bodyparaser.text());

app.use('/routes',routes);

app.listen(Port,async ()=>{
    console.log(`Server started at ${ServerConfig.Port}`);
    await Dbconnect();
    console.log("database succefully conncected");
})




