const express = require('express');
const bodyParser = require('body-parser');
const {MongoClient} = require('mongodb');
const mongoose = require('mongoose');
const cors = require('cors');
const mongodbConnect = require('./config/ConnectDB');
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors())


const register = require('./api/users/Register');
const login = require('./api/users/Login');
const user_profile_update = require('./api/users/Update');
const user_password_reset = require('./api/users/Password_Reset');
const register_apps = require('./api/users/register_apps');
const user_detail = require('./api/users/user_detail');
const jwt = require('jsonwebtoken');
const courses = require('./api/teachers/courses');
const user_review = require('./api/student/user_review');
const review = require('./api/fetch/review');
const customer_contact = require('./api/users/customer_contact');
const signin = require('./api/users/signin')
const dotenv = require('dotenv');
const enroll_courses = require('./api/fetch/coursesenroll')
const quiz = require('./api/fetch/quiz')





mongodbConnect();

app.use('/register', register);
app.use('/login', login);
app.use('/user_profile_update', user_profile_update);
app.use('/user_password_reset', user_password_reset);
app.use('/register_apps', register_apps);
app.post('/user_detail', user_detail);
app.use('/courses', courses);
app.use('/user_review', user_review)
app.use('/review', review)
app.use('/customer_contact', customer_contact);
app.use('/signin', signin)
app.use('/enroll_courses/:id', enroll_courses)
app.use('/quiz', quiz)
app.post('/course_detail', (req, res)=>{
    const client = new MongoClient(url);
    const db = client.db("Tech_Temple");
    const collection = db.collection("courses");
    collection.find().toArray().then(result =>{
        res.send(result);
      
    }
    )

})
app.use('/token', (req, res)=>{
    let {token} = req.body;
    if (!token) return res.status(403).send('Token is required');
    jwt.verify(token, '123456', (err, decoded) => {
      if (err) return res.status(401).send('Invalid token');
      req.email = decoded.email;
      res.send(decoded.email);
      
      
    });
  });
  
  

app.use('/', (req, res)=>{
    res.send('<h1>hello</h1>')
})


app.listen(3000)


