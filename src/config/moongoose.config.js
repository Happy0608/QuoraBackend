const mongoose=require('mongoose');
const serverconfig=require('./ServerConfig');


module.exports=async function Dbconnect(){
    
    
    try{
        console.log("database will connect");
        const database= await mongoose.connect(serverconfig.Atlas_url);
    }catch(error){
        console.log("unable to connect to dbserver");
        console.log(error);
    }

}






