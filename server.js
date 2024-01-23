const express = require('express');
const app = express();
const {connectToMongoDB} = require('./config/dbconfig')
const {config} = require('dotenv');


const {router} = require('./Main_Router/router.js')
config();

 connectToMongoDB()

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use(router)

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})