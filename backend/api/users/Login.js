const express = require('express')
const  bodyParser = require('body-parser');
const app = express();
const dotenv = require('dotenv');

dotenv.config()
const url = process.env.URL
const { MongoClient} = require('mongodb');
const login = require('../../model/usermodal/Login');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
app.use(bodyParser.json());
app.use(express.json());
const router = express.Router();
router.post('/login', async(req, res) =>{
    const {email, password} = req.body;
   
   
    const client = new MongoClient(url);
    const db = client.db("Tech_Temple");
    const collection = db.collection("users");
    try{
      
        let result =  await collection.findOne({email: email});
           
            if(!result){
                res.send({success:false, message: "invalid email"})
                return;
 
             }
              try{
                let result1 = await bcrypt.compare(password, result.password);
                if(result1){
               
                    const token = jwt.sign({ email: email }, '123456', { expiresIn: '1h' });
                    res.send({success: true, message: "login successfully", token: token});
                }
                else{
                     res.send({success: false, message: "invalid password"})
             
               }
 

              }catch(err){
                res.send({success:false, message: "invalid email"})

              }
            
            

        
           
      
    }catch(err){
        
        console.log(err.message);
    }
})






module.exports = router;