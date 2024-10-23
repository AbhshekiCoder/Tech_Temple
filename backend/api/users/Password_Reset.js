const express = require('express')
const  bodyParser = require('body-parser');
const app = express();
var url = "mongodb+srv://projects:123456ytrewq@cluster0.0qqnloi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";;
const { MongoClient} = require('mongodb');
const register = require('../../model/usermodal/Register');

app.use(bodyParser.json());
app.use(express.json());
const router = express.Router();

router.post('/user_password_reset', (req, res)=>{
    const {email,  new_password} = req.body;
    let client = new MongoClient(url);
    let db = client.db("Tech_Temple");
    let collection = db.collection("users");
    try{
        collection.updateOne(
            {email: email},
            {
                $set:{password: new_password}
            }
        ).then(()=>{
            res.send("password reset successfully")
        })
    }catch(err){
        console.log(err.message);
    }

})

module.exports = router;
