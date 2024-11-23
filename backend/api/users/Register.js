const express = require('express')
const  bodyParser = require('body-parser');
const app = express();
const dotenv = require('dotenv');

dotenv.config()
const url = process.env.URL
const { MongoClient} = require('mongodb');
const user = require('../../model/usermodal/Register');
const bcrypt = require('bcrypt');

app.use(bodyParser.json());
app.use(express.json());
const router = express.Router();

router.post('/register', async(req, res) =>{
    const{name, email, password} = req.body;
    let password1 = 0;
    try{
        let password1 = await bcrypt.hash(password, 10);
        let obj = new user({
            name: name,
            email: email,
            password: password1
        });
        let client = new MongoClient(url);
        let db = client.db("Tech_Temple");
        let collection = db.collection("users");
        collection.find({email: email}).toArray().then(result =>{
            if(result.length > 0){
               
                res.send({success: false, message: "email already registered"});
            }
            else{
               

            }
        })
      
    }
    catch(err){
        console.log(err.message);
    }


})


module.exports = router;