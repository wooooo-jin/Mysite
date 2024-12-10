const mongoose = require('mongoose');
const { Schema } = mongoose;
const {Types: {ObjectId}} = Schema;


const commentSchema = new Schema({
    commenter: {
        type:ObjectId,
        required: true,
        ref:'User'
    }, //mongodb는 관계를 쓰지 않는다.
    comment:{
        type:String,
        required: true,
    },
    createAt:{
        type:Date,
        default:Date.now
    },

})

module.exports = mongoose.model('comment', commentSchema);