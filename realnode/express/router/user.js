const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('Hello goat');
});

router.get('/:id/visd', (req, res)=>{
    console.log(req.params, req.query);
    res.send('Hello dasd');
});

router.get('/*', (req, res)=>{
    res.send('Hello zxc');
});


module.exports = router;