const express = require('express')
const  bodyParser = require('body-parser');
const app = express();
var url = "mongodb+srv://projects:123456ytrewq@cluster0.0qqnloi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";;
const { MongoClient} = require('mongodb');
const register = require('../../model/usermodal/Register');

app.use(bodyParser.json());
app.use(express.json());
const router = express.Router();

router.post('/register', (req, res) =>{
    const{name, email, password} = req.body;

    try{
        let obj = new register({
            name: name,
            email: email,
            password: password
        });
        let client = new MongoClient(url);
        let db = client.db("Tech_Temple");
        let collection = db.collection("users");
        collection.find({email: email}).toArray().then(result =>{
            if(result.length > 0){
                res.send("email already registered");
            }
            else{
                collection.insertOne(obj).then(()=>{
                    res.send("Registered Successfully")
                    console.log("send successfully");

                })

            }
        })
      
    }
    catch(err){
        console.log(err.message);
    }


})

module.exports = router;