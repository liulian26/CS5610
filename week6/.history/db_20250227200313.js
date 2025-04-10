require('dotenv').config();
const {MongoClient} = require('mongodb');
const url = process.env.MongoDB_URI;
const client = new MongoClient(url);

// const { get } = require('./routes/tasks');



module.exports = {
    connect: async function() {
        await client.connect();
    },

    // addToDB accepts an object to write to tasks collection in cs5610 database
    addToDB: async function(doc){
        try {
            const result = await client.db("cs5610").collection("tasks").insertOne(doc);
            console.log("Document added ", result.insertedId);
            return result.insertedId;

        } catch (err) {
            console.log("addToDB", err);
        }
    },

    //read and returns all the data in our collection
    getAllTasks: async function() {
        try {
            // get all task
            const cursor = client.db("cs5610").collection("tasks").find();
            const tasks = await cursor.toArray();
            console.log("tasks", tasks);
            return tasks;
        } catch (err) {
            console.log("getAllTasks", err);
            return [];
        }
    },
};