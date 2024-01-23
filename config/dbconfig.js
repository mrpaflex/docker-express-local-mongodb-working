const { MongoClient } = require('mongodb');
require('dotenv').config()

const uri = process.env.MONDB_URI;
const dbName = process.env.DOCKDB_NAME;

const client = new MongoClient(uri);

const db = client.db(dbName)

    async function connectToMongoDB (){
   try {
   const cli =  await client.connect();
     console.log('Connected to MongoDB');
     return cli;
   } catch (error) {
     console.error('Error connecting to MongoDB:', error.message);
     throw error; // Re-throw the error to handle it at a higher level if needed
   }
 }

module.exports = { connectToMongoDB, db };
