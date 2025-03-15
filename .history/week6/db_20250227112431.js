const {MongoClient} = require('mongodb'); 

const uri = "mongodb+srv:<username:pass>@<your cluster url>/<name of your db>?retryWrites=true&w=majority";
const client = new MongoClient(uri);
await client.connect()
module.exports = {
    connect: function() {
        const client = new MongoClient(uri);
        return client.connect();
    }
        
};