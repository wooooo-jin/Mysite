const fs = require('fs').promises

const context = "살기 쉽지않네"


//promises 형태의 사용법
fs.writeFile('test.txt', context, 'utf8')  //'test.txt'는 파일명  택스트 내용에context를 추가하겠다. utf8은 인코딩
    .then((data)=>{
        console.log('파일 쓰기 완')
    }).catch((err)=>{
        console.error(err)
    })


    // async awit
    async function writefile(path,context){  //async 비동기임( 비동기 함수를 알려주는 역할도 함) promises사용 했다고 알려줌
        try{
            await fs.writeFile(path, context, 'utf8'); //비동기 처리(비동기 함수) 비동기 함수를 연속적으로 사용할 때  
            console.log('파일쓰기 완')     //콜백함수 호출스택으로 감
        }catch(err) {
            console.log('실패', err)
        }
    }
writefile('./test.txt', context)

