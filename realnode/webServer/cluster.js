const cluster = require('cluster');   //inport
const http = require('http');
const os = require('os');

if (cluster.isMaster) {
    console.log(`마스터 프로세스 : ${process.pid}`) //pid는 프로세스 아이디
    const numCPUs = os.cpus().length
    for (let i=0; i < numCPUs; i++){  //CPU의 개수만큼 워커 생성
        cluster.fork()
    }
    // 워커들이 종료될때마다 실행
    cluster.on('exit', (worker, code, signal)=>{
        console.log(`${worker.process.pid}번 워커 종료`);
        console.log(`code : ${code} / signal : ${signal}`);
        //cluster.fork();    //크러스트 생산을 계속해줌
    });

}else{   //새로고침을 하면 req를 다시 보낸 것이다. 새로고침을 하면 서버끄고 지우고 다시 req받아서 서버 다른 서버로 들어감
    http.createServer((req,res)=>{ //서버는 응답받고 해당값을 주고
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end('<h1>Cluster</h1>');
        setTimeout(()=>{
            process.exit(1);
        }, 3000) // 3초에 하나씩 워커 종료
    }).listen(8080);
    console.log(`${process.pid} 워커 실행`)
}