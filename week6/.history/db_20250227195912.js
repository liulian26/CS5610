require('dotenv').config();
const { MongoClient } = require('mongodb');

const url = process.env.MongoDB_URI;
if (!url) {
    console.error("❌ ERROR: MONGO_URI is undefined! Check your .env file.");
    process.exit(1);
}

const client = new MongoClient(url);

async function connect() {
    try {
        await client.connect();
        console.log("✅ Connected to MongoDB!");
    } catch (err) {
        console.error("❌ MongoDB Connection Error:", err);
        process.exit(1);
    }
}

async function addToDB(doc) {
    try {
        const result = await client.db("cs5610").collection("tasks").insertOne(doc);
        console.log("✅ Document added:", result.insertedId);
        return result.insertedId;
    } catch (err) {
        console.error("❌ addToDB error:", err);
    }
}

async function getAllTasks() {
    try {
        console.log("🔍 Fetching all tasks...");
        const cursor = client.db("cs5610").collection("tasks").find();
        const tasks = await cursor.toArray();
        console.log("📌 Retrieved tasks:", tasks);
        return tasks;
    } catch (err) {
        console.error("❌ getAllTasks error:", err);
        return [];
    }
}

// ✅ 直接 `module.exports = {}`，但 **确保 `require('../db')` 之后，所有函数已定义**
module.exports = { connect, addToDB, getAllTasks };
