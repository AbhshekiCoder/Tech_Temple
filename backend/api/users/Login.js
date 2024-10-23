const express = require('express')
const  bodyParser = require('body-parser');
const app = express();
var url = "mongodb+srv://projects:123456ytrewq@cluster0.0qqnloi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";;
const { MongoClient} = require('mongodb');
const login = require('../../model/usermodal/Login');
app.use(bodyParser.json());
app.use(express.json());
const router = express.Router();
router.post('/login', (req, res) =>{
    const {email, password} = req.body;
   
    const client = new MongoClient(url);
    const db = client.db("Tech_Temple");
    const collection = db.collection("users");
    try{
        collection.find({$and:[{email: email}, {password: password}]}).toArray().then(result =>{
            if(result.length > 0){
                res.send("login successfully");
                console.log("login successfully");
            }
            else{
                res.send("invalid email and password");
            }
        })
    }catch(err){
        console.log(err.message);
    }
})






module.exports = router;