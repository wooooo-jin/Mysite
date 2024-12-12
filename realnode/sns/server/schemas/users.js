const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    snsId: {
        type: String,
        unique: true,
        required: true,
        maxlength: 30,
    },
    password: {
        type: String,
        required: true,
        maxlength: 100,
    },
    email: {
        type: String,
        maxlength:50,
        unique: true,
        sparse: true,  //sparse 값이 비어 있다는 뜻 sparse는 유니크지만 null값을 허용하고 싶을 때.
    },
    nick: {
        type: String,
        required: true,
        maxlength:20,
    },
    phoneNB : {
        type:String,
        maxlength: 20,
    },
    create_at : {
        type:Date,
        default:Date.now
    },
    delete_at : {
        type:Date,
        default:null
    },
},{ timestamps: false,
    conllation:'users'
})  

const User = mongoose.model('User', userSchema)
module.exports = User;