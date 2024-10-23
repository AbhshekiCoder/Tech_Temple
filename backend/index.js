const express = require('express');
const bodyParser = require('body-parser');
const {MongoClient} = require('mongodb');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
const register = require('./api/users/Register');
const login = require('./api/users/Login');
const user_profile_update = require('./api/users/Update');

const url = "mongodb+srv://projects:123456ytrewq@cluster0.0qqnloi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

function mongodbConnect(){
    mongoose.connect('mongodb+srv://projects:123456ytrewq@cluster0.0qqnloi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
        console.log('connected');

    }).catch((err)=>{
        console.log(err.message);
    })

}
mongodbConnect();

app.post('/register', register);
app.post('/login', login);
app.put('/user_profile_update', user_profile_update);
app.get('/', (req, res)=>{
    res.send('<h1>hello</h1>')
})

app.listen(3000)

// app.listen(3000)


