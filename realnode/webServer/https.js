const https = reqiure('https');
const fs = require('fs');
        // 서버를 초기화 하는데 동기적으로 하면 좋다. 이유는 한번만 할 작업이니까 오류없이 동기적으로 처리하는게 효율적이다.
        // 비동기의 장점 리소스를 효율적으로 사용 가능하다.
        // 인증서가 들어가는 자리        서버가 열리는데 동기적으로 처리해야 서버에 문제가 생기면 찾기 쉬움
https.createServer({   // 내부적으로 오브젝트를 가져다가 사용
    cert : fs.readFile('도메인 인증서 경로'), // 도메인 인증서 경로
    key : fs.readFileSync('도메인 비밀키 경로'),// 도메인 비밀키 경로
    ca:[
        fs.readFile('상위 인증서 경로'), //상위 인증서 경로
    ]  //서버가 만들어지고 한번 만들어지면 끝! 그래서 이것은 비동기로 만들 필요가 없다.
}  ,(req, res)=>{                    //나랑 io를
    
}) //https는 포트번호는443 
.listen(443, () => {
    console.log('443번 포트에서 서버 대기 중입니다!');
  });