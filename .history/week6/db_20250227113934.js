const {MongoClient} = require('mongodb'); 

const uri = process.env.MONGO_URL;

module.exports = {
    connect: async function() {
        const client = new MongoClient(uri);
        await client.connect();
    }
        
};