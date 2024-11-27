const buffer = Buffer.from('Hello World')

console.log(buffer) //버퍼의 내용 출력
console.log(buffer.length)//버퍼의 길이 출력
console.log(buffer.toString())// buffer를 문자열로 변환


const arr = [Buffer.from('나보기가'), Buffer.from('역겨워 가실때에는'), Buffer.from('말없이 고이 보내드림')] // [Buffer.from('')] 해당문자를 버퍼로 만드는 것
const bufferJin = Buffer.concat(arr)//해당 버퍼를 하나로 합침

console.log(bufferJin.toString())  //버퍼로 만들면 2진 데이터가 됩니다.

const buffer3 = Buffer.alloc(5) //5byt짜리 버퍼임 블럭을 만들었음
console.log(buffer3)