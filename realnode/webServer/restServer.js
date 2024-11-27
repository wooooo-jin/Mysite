const http = require('http');  // 서버만들기
const fs = require('fs').promises;      // 파일 시스템
const path = require('path')  // 파일 경로 (모듈)

const users = {};  //데이터 저장소


http.createServer(async (req, res)=> {        //1.if문 <- method  2.if문 <- 첫번째 라우터 3.if문 <-
    try{
        if(req.method === 'GET'){            //GET방식으로 요청을 보내면 요청보낼수 있는게 3개 loot/about/users
            if(req.url === '/'){     
                const data = await fs.readFile(path.join(__dirname, 'restFront.html'));  // 현재 디렉토리 위치 에서 restFront.html를 띄워주겠다! __dirname는 구별해 주는 이름 join은
                res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'}); // writeHead 헤더 정보와 ???를 보내준다.
                return res.end(data);

            } else if (req.url === '/about') {
                const data = await fs.readFile(path.join(__dirname, 'about.html'));  // 현재 디렉토리 위치 에서 restFront.html를 띄워주겠다! __dirname는 구별해 주는 이름 join은
                res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'}); // writeHead 헤더 정보와 ???를 보내준다.
                return res.end(data);

            } else if (req.url === '/users') {
                res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'}); // 조회하는 users
                return res.end(JSON.stringify(users));
            }
            try{
                const data = await fs.readFile(path.join(__dirname, req.url)); // if문 밖에있는 try는  about '/'(루트) users
                return res.end(data);
            } catch (err) {
                console.error(err);        // 요청하는 파일이 없다면 여기로 와서 에러창을 띄워준다.
            }

        }
        else if(req.method === 'POST'){  // POST는 어떤url을 받을지 결정하면 됩니다.  // method가 다르면 주소는 같아도 됩니다.
            if(req.url === '/user'){
                let body ='';
                req.on('data', (data)=>{
                    body += data;
                });
                return req.on('end',()=>{
                    console.log('POST 본문(Body):',body)
                    const { name } = JSON.parse(body);   //body에있는걸 JSON형식으로 만들어서 넣겠다.
                    const id = Date.now();          //Date.now는 데이터가 찍힌 시간
                    users[id] = name;
                    res.writeHead(201, {'Content-Type' : 'text/plain; charset=utf8'});  //성공 했다고 메세지를 전달함.
                    res.end('등록성공');
                })
            }
        }
        else if(res.method === 'PUT'){              //값을 바꿔줌(교체)   method가 put으로 들어오는 것을 만드는 중이다. localhost:8080/user/id 형식이면 user뒤에 들어오는 아이디를 찾는거고
            if(req.url.startsWith('/user/')){     //   / 슬러시가 양쪽에 두개가 있으니고
                const key = req.url.split('/')[2];
                let body = '';
                req.on('data', (data)=>{             // body
                    body += data;
                });
                return req.on('end', () => {
                    console.log('PUT 본문(Body):', body);
                    users[key] = JSON.parse(body).name;
                    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
                    return res.end(JSON.stringify(users));
                });
            }
        }
        else if (req.method === 'DELETE'){
            if(req.url.startsWith('/user/')){
                const key = req.url.split('/')[2];
                delete users [key];
                res.writeHead(200, {'Content-Type' : 'text/plain; charset=utf-8'});
                return res.end(JON.stringify(users));
            }
            res.writeHead(404);
            return res.end('NotFound')
            
        }
    }
    catch(err){
        console.error(err);
        res.writeHead(500, {'Content-Type' : 'text/plain; charset=utf-8'})
        res.end(err.message);
    }
}).listen(8080,()=>{
    console.log('8080서버 실행 중')
})
