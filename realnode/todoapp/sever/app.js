const express = require("express");
const cors = require("cors");
const router = require('./routes');
const imageUpload = require('./routes/imageUpload');
const path = require("path");

const app = express();

// 미들웨어 만들기
app.use(cors());
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/', router);
app.use('/image', imageUpload)

app.listen(3000, ()=>{
    console.log('3000번 포트에서 서버 가동중')
})