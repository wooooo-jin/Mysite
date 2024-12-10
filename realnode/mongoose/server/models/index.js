const mongoose = require('mongoose'); // 몽구스를 가져오는 역할     
//코드만 만들고 실행은 안됨 실행은 app.js에서 할거임.
const connect = () =>{
  if(process.env.Node_ENV !== 'production') { // 배포를 한 상태가 아니면 테스트 디벨롭
    mongoose.set('debug', true); // 배포가 완료된 상태가 아닐경우 디버그 로깅을 사용
                  //MongoDB 쿼리를 로깅하여 개발중에 확인용으로 쓰겠다.
  }
  mongoose.connect('mongodb://root:1234@localhost:27017/admin',{   // MongoDB 연결 앞에는 mongodb라고 쓰고 뒤에는 내 아이디와 비밀번호 그 뒤는 로컬포트
    dbName: 'nodejs', // nodejs라는 db이다.
    useNewUrlParser: true,//
  }).then(()=>{
    console.log('MongoDB Conneted');
  }).catch((err)=>{
    console.log('##########에러발생##########');
    console.error(err)
  })
}

mongoose.connection.on('error',(err)=>{  //에러 나오면 에러 메세지 출력
  console.log('MongoDB Connect Fail',err)
});

mongoose.connection.on('diconnected',()=>{
  console.log('MongoDB diconnected and re try Connection')
  connect();
});

module.exports = connect; //connect라고   //db에 연결을 하는 친구
