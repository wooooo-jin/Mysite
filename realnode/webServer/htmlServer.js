const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req,res)=>{
    try{
        const data = await fs.readFile('./index.html')
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf8'});
        //res.write(data)
        res.end(data)
    }
    catch (err) {
        console.error(err);
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf8'});
        res.end(err.message);
    }
}).listen(8080, ()=>{
    console.log("htmlServer 돌아가요")
})


