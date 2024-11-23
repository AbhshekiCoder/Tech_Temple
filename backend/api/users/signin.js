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
router.post('/signin', async(req, res) =>{
    const {email, password, role} = req.body;
   
   console.log(role)
    const client = new MongoClient(url);
    const db = client.db("Tech_Temple");
    const collection = db.collection(role);
    try{
      
        let result =  await collection.find({$and:[{email: email}, {password: password}]}).toArray();
           console.log(result)
            if(result.length< 1){
                res.send({success:false, message: "invalid email or password"})
                return;
 
             }
             else{

             
              try{
               
              
                    console.log(role)
                    const token = jwt.sign({ email: email }, '123456', { expiresIn: '1h' });
                    res.send({success: true, message: "login successfully", token: token, role: role});
                
                
 

              }catch(err){
                console.log(err.message);

              }
            }
            
            

        
           
      
    }catch(err){
        
        console.log(err.message);
    }
})


module.exports = router;