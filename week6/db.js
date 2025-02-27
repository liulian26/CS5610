const {MongoClient} = require('mongodb'); 

const url = 
    "mongodb+srv://atlas-sample-dataset-load-67c0bdcae5756f3d10535b3b:D7YKNOZNleUjO9LL@cluster0.f77k2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(url);

module.exports = {
    connect: async function() {
        await client.connect();
    },

    // addToDB accepts an object to write to tasks collection in cs5610 database
    addToDB: async function(doc){
        try {
            const result = await client.db("cs5610").collection("tasks").insertOne(doc);

        } catch (err) {
            console.log("addToDB", err);
        }
    },
};