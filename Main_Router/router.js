const {db} = require('../config/dbconfig')
const express= require('express');
const router = express.Router();
const {config} = require('dotenv');
config()


 router.get('/', async (req, res)=>{
   try {
    const user = await db.collection('mam').find().toArray()
     res.status(200).json({
        user: user
    })
   } catch (error) {
    res.status(404).json({msg: error})
   }
});



router.post('/post', async (req, res)=>{
try {
    const {named, email, username} = req.body;

    const user =  await db.collection('mam').insertOne({
     name: named,
     email: email,
     username: username
    })
    
    if (!user) {
     return res.status(405).json({msg: "not successfully"})
  }
 
   return res.status(200).json({user: user})
} catch (error) {
    return res.status(500).json({ msg: "Internal server error" });
}

})




module.exports ={router}