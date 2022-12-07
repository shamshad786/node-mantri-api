const mongoose = require('mongoose')


const loginSchema = new mongoose.Schema({
    mobile: {
        type: String
    },
    password: {
        type: String
    }    
}, {timestamps: true})


const Login =  mongoose.model('Login', loginSchema)

module.exports =  Login;