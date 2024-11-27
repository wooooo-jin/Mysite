// const http = require('http')

// http.createServer((req,res)=>{
//     console.log(req.url, req.headers.cookie);
//     res.writeHead(200, {'Set-Cookie' : 'myCookie=test'});
//     res.end("<h1>Cookie</h1>")
// }).listen(8080, ()=>{
//     console.log('8080포트 대기')
// })

const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const parseCookies = (cookie ='')=>{        // 'name= wooo; id=jjin;....' 이렇게 긴 문장이 들어오는데 이것을 쿠키라고 한다. 원하는대로 파싱을 하려면 원하는 값만 꺼낼 수 있는 것으로 바꾼다. 오브젝트로 바꾼다. 
    cookie.split(';')                   //  ['name=wooo', 'id=jjin',....]
    .map(v => v.split('='))             //  [[name,wooo], [id=jjin],....]
    .reduce((acc, [k, v])=>{
        acc[k.trim()] = decodeURIComponent(v);    //아스키코드를 문자로 바꿔줌  //k.trim은 앞뒤 공백제거
        return acc //{name : 'wooo', id : 'jjin', ....}
    }, {}); //객체 iterable이 들어가야함.

}

http.createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie); // 현재 동기적 처리 서버가 켜지자 마자 req가 쿠키부터 파싱해서 만든다.
    // 주소가 /login으로 시작하는 경우   //login?name=woo 라는 req.가 나옴 ?뒤부터가 서치파라미터이다.
    if (req.url.startsWith('/login')) {           // login을 시작하면 이 밑에 있는 작업들을 실행 하겠다.
      const url = new URL(req.url, 'http://localhost:8084'); //req.url을하면 패스정보가 들어오고 req.url을 요청이 들어온 req.url은 기본 도메인이 없어음  input으로 받을 url http://localhost:8080
      const name = url.searchParams.get('name');
      const expires = new Date();
      // 쿠키 유효 시간을 현재시간 + 5분으로 설정
      expires.setMinutes(expires.getMinutes() + 3);
      res.writeHead(302, {
        Location: '/',
        'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,   // HttpOnly 자바스크립트 코드 못보게 막아줌 쿠키 정보 빼 갈까봐 http로만 접속 가능
      });
      res.end();
    }else if(cookies.name){
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(`${cookies.name}님 반갑습니다.`)
    }else {
        try{
            const data = await fs.readFile(path.join(__dirname, ' cookie.html'));
            res.writeHead(200, {'Contente-Type' : 'text/plain; charset=utf-8'});
            res.end(data);
        } catch (err){
            res.writeHead(500, {'Content-Type' : 'text/plain; charset=utf-8'})
            res.end(err.message);
        }
      }
    })
      .listen(8084, () => {
        console.log('8084번 포트에서 서버 대기 중입니다!');
    });



// {'name=wooo; address=heon;'}
// [name=wooo, address=heon] //split 하면 결과 name 키 wooo 벨류

// { name : 'wooo',
//     address : 'heon'
// }