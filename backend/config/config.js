const mongoose = require('mongoose')
function mongodbConnect(){
    mongoose.connect('mongodb+srv://projects:123456ytrewq@cluster0.0qqnloi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
        console.log('connected');

    }).catch((err)=>{
        console.log(err.message);
    })

}
module.exports = mongodbConnect();
