const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// multer
const storage = multer.diskStorage({
    destination : './uploads/',
    filename : (req, res, cb) =>{
        cb(null, `${Date.now()}-${res.originalname}`)
    }
})

const upload = multer({storage})

router.post('/upload', upload.single('image'), (req, res)=>{
    const imageUrl = `uploads/${req.file.filename}`
    res.json({ imageUrl })
    console.log(imageUrl)
})

router.get('/', (req, res)=>{
    const dirPath = path.join(__dirname, '../uploads');
    // console.log(dirPath , 'dirPath')
    fs.readdir(dirPath, (err, files)=>{
        console.log(files)
        const imageUrls = files.map(file=> `uploads/${file}`)
        res.json(imageUrls)
    })
})


module.exports = router;