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

const parseCookies = (cookie ='')=>       // 'name= wooo; id=jjin;....' 이렇게 긴 문장이 들어오는데 이것을 쿠키라고 한다. 원하는대로 파싱을 하려면 원하는 값만 꺼낼 수 있는 것으로 바꾼다. 오브젝트로 바꾼다. 
    cookie.split(';')                   //  ['name=wooo', 'id=jjin',....]
    .map(v => v.split('='))             //  [[name,wooo], [id=jjin],....]
    .reduce((acc, [k, v])=>{
        acc[k.trim()] = decodeURIComponent(v);    //아스키코드를 문자로 바꿔줌  //k.trim은 앞뒤 공백제거
        return acc //{name : 'wooo', id : 'jjin', ....}
    }, {}); //객체 iterable이 들어가야함.


  //{cookie.split().map().reduce()}

    

const session = { //세션에서 찾아준다. req가 들어오면 세션도 같이 만들어짐 그리고 우리서버에 저장함
  //이 테이터는 서버에 있다.
  //서버는 메모리에 저장하고 서버를 끄면 초기화된다.
};



    //req는 포트 뒷부분
http.createServer(async (req, res) => {      //서버영역
    const cookies = parseCookies(req.headers.cookie); // 현재 동기적 처리 서버가 켜지자 마자 req가node 쿠키부터 파싱해서 만든다.
    // 주소가 /login으로 시작하는 경우   //   login?name=woo 라는 req.가 나옴 ?뒤부터가 서치파라미터이다.
    if (req.url.startsWith('/login')) {           // login을 시작하면 이 밑에 있는 작업들을 실행 하겠다.
      const url = new URL(req.url, 'http://localhost:8084'); //req.url을하면 패스정보가 들어오고 req.url을 요청이 들어온 req.url은 기본 도메인이 없어음  input으로 받을 url http://localhost:8080
      console.log(url)
      const name = url.searchParams.get('name'); //서치 부분에 있는 데이터만 가져오고싶음
      const expires = new Date();
      // 쿠키 유효 시간을 현재시간 + 3분으로 설정
      expires.setMinutes(expires.getMinutes() + 3);

      const uniqueInt = Date.now()  //시간 찍기
      session[uniqueInt] = {
        name,
        expires,
      }

      res.writeHead(302, {
        Location: '/',       //쿠키에서 세션값을 찾아줘야한다.
        'Set-Cookie': `session=${ uniqueInt }; name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,   // HttpOnly 자바스크립트 코드 못보게 막아줌 쿠키 정보 빼 갈까봐 http로만 접속 가능
      });
      res.end();      //쿠키에서 세션값을 찾아줘야한다.
    }else if(cookies.session && session[cookies.session].expires > new Date()){ //들어온시간 +3분 보다 적은 시간이면 그동안은 세션이 돌아간다.
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(`${session[cookies.session].name}님 반갑습니다.`)
    }else {           // 로그인 아니고 쿠기가 없는 구간 url이 login이 아님
        try{
            const data = await fs.readFile(path.join(__dirname, 'cookie.html')); //readFile비동기식 await비동기를 동기적으로
            res.writeHead(200, {'Contente-Type' : 'text/html; charset=utf-8'});
            res.end(data);
        } catch (err){
            res.writeHead(500, {'Content-Type' : 'text/plain; charset=utf-8'})
            res.end(err.message);
        }
      }
    })
      .listen(8084, () => { //서버를 킴
        console.log('8084번 포트에서 서버 대기 중입니다!');
    });



// {'name=wooo; address=heon;'}
// [name=wooo, address=heon] //split 하면 결과 name 키 wooo 벨류

// { name : 'wooo',
//     address : 'heon'
// }