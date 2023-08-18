const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const users = new Schema ({
    name : {
        type : String,
        trim : true,
        require : true
    },
    email : {
        type : String,
        trim : true,
        require : true,
        unique : true
    },
    password : {
        type : String,
        trim : true,
        require : true
    }
})

const User = model ("User", users)

module.exports = User;