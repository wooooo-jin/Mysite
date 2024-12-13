//모듈 불러오기
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { isLoggdIn } = require('../middleware');
const { afterUploadImage, uploadPost} = require('../controller/post');


//라우터
const router = express.Router()

try{
    fs.readdirSync('uploads'); // 폴더가 있는지 확인한다.
} catch (err){
    console.error('uploads 폴더가 없어 폴더를 생성합니다.') // uploads 폴더가 없으면 mkdirSync이 폴더를 생성하겠다.
    fs.mkdirSync('uploads')
}

const upload = multer({
    storage:multer.diskStorage({
        destination(req,res,cb){ // 저장하겠다.
            cb(null, 'uploads/'); //uploads 라는 폴더에
        },
        filename(req,file,cb){
            const ext = path.extname(file.originalname);
            cb(null, path.basename(file.originalname, ext)+Date.now()+ext); //파일 이름을 이렇게 만들겠다.
        }
    }),
    limits: {fileSize: 5 * 1024 * 1024} //5메가 보다 적은 파일을 저장하게다.
})


// post/lmg
router.post('/img', isLoggdIn, upload.single('img'), afterUploadImage);

//post
const upload2 = multer()
router.post('/', isLoggdIn, upload2.none(), uploadPost);

module.exports = router;


