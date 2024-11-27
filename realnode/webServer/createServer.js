const http = require('http');

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf8'});
    res.write('<h1>Hello World</h1>');  //res은 응답이다.(respons)응답부분/바디
    res.end('<p>Node Server</p>');
}).listen(8080, ()=>{
    console.log('8080포트에서 서버 대기중'); //서버의 특정 포트정함
});

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf8'});
    res.write('<h1>Hello World</h1>');  //res은 응답이다.(respons)응답부분/바디
    res.end('<p>Welcom server</p>');
}).listen(8081, ()=>{
    console.log('8081포트에서 서버 대기중'); //서버의 특정 포트정함
});

