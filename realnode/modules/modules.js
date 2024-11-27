const os =require('os')
const path = require('path')

// // 현재 경로를 알려주는 함수 (내 컴퓨터의 로컬환경에서 돌리기 때문에 가능)
// console.log(process.cwd())
// // pid는 프로세스 아이디라는 뜻이다. process ID
// console.log(process.pid)
// //Node의 버전
// console.log(process.version)
// //cpu 아키택쳐 //컴퓨터가 몇 비트인지
// console.log(process.arch)
// // 내 컴퓨터의 운영체제   (win32)
// console.log(process.platform)

// 웹 브라우저에서 사용할 때와 node에서 사용할 때 차이는??
// 자바스크립트라는 같은 언어를 사용하고 있지만 환경이 달라진것이다.
// node 장점 쉽게 가져다가 사용할 수 있다. 단점은 보안에 취악하다.
// 자바스크립트는 웹 브라우저에서 돌아간다. 자바스크립트는 내 컴퓨테에서 원래 돌아가면 안된다.
// const os = require('os')
// // cpu 아키텍쳐
// console.log(os.arch())
// //운영체제
// console.log(os.platform)
// console.log(os.type())
// // 시스템 호스트 이름
// console.log(os.hostname())
// // cpu 정보 보기
// console.log(os.cpus())
// // 메모리(RAM)
// console.log(os.freemem() / (1000*1000*1000))
// console.log(os.totalmem()/ (1000*1000*1000))

// 경로상의 directory 부분 반환
console.log(path.dirname('C:\User\func.js'))
// 경로상의 파일에 확장자 부분 반환
console.log(path.extname('C:\User\func.js'))
// 경로상의 파일의 이름 반환(두번째 인수 : 제거할 확장자)
console.log(path.basename('C:\User\func.js'))
console.log(path.basename('C:\User\func.js','js'))
// 상대경로의 path을 만들때 사용
console.log(path.join('user','project', 'func.js'))
// 현재 위치부터의 절대경로를 만들때 사용
console.log(path.resolve('user','project', 'func.js'))
