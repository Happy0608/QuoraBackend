require('dotenv').config();

module.exports={
    Port:process.env.Port || 4001,
    Atlas_url:process.env.MongoDbUrl
}