const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
        maxlength:300,
    },
    img:{ //패스 정보만 들어가게 만듬
        type:String,
        maxlength:300,
    },
    user:{ //f key  1:n관계
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    hashtags:[{ // n:n 관계  배열안에 이런 정보들을 넣을 거기 때문에 []로 열고 닫음
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hashtag',
    }],
    likes:{
        type:Number,
        default:0,
    },
},{
    timestamps: true,
    collection:'Post'
});

const Post = mongoose.model('Psot', postSchema)

module.exports = Psot;