const mongoose = require('mongoose');

const courses_scehema = new mongoose.Schema({
    title:{
        type: String
    },
    description:{
        type: String
    },
    price:{
        type: Number
    },
    duration:{
        type: Number
    },
    projects:{
        type: Array
    },
    languages:{
        type: Array
    },
   
})

const courses = mongoose.model('courses', courses_scehema);
module.exports = courses;
