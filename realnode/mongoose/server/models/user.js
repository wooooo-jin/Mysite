const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    name:{
        type: String,
        required:true,
        unique:true,
    },
    age:{
        type:Number,
        required:true,
    },
    married:{
        type: Boolean,   //Boolean 조지불리언씨 이름임
    },
    conmment:{
        type:String,
    },
    createAt:{
        type: Date,
        default: Date.now,
    },
}, { versionKey : false })

const postSchema = new Schema({
    create: String,
    post:String,
},{collection: 'user'})

module.exports = mongoose.model('Post', postSchema)// posts 
 //userSchema라는 데이터가 스키마는 = 데이터베이스 로 봐라 정확히는 데이터 베이스 설계도다.
module.exports = mongoose.model('User', userSchema) // collection -> users  대문자로 쓰는데 알아서 소문자화를 하고 복수화를 한다.   
// 소문자화 + 복수화 => User -> user-> users
// users => users 