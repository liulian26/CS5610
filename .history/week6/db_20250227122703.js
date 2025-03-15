const {MongoClient} = require('mongodb'); 
require('dotenv').config();

const url = 
    "mongodb+srv:123@mongodb+srv://atlas-sample-dataset-load-67c0bdcae5756f3d10535b3b:<db_password>@cluster0.f77k2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/cs5610?retryWrites=true&w=majority";
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