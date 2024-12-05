const Sequelize = require('sequelize');
const User = require('./User'); // 모델을 가져온다.
const Comments = require('./Comments');


const env = process.env.NODE_ENV || 'development';  //  환경 변수 설정  // 개발단계니까 development 사용config에서 수정
const config = require('../config/config')[env];    // env는 위 환경설정에 맞는 config를 가져온다. 현재 데이터 베이스를
const db = {}; 

const sequelize = new Sequelize(config.database, config.username, config.password, config); //node와 db는 관련이 전혀 없는데 node환경에서 db를 사용 하려고 Sequelize라는 것을 사용해서 쓰려고한다.

db.sequelize = sequelize;
db.User = User;// db에 테이블 정보 전달
db.Comments = Comments;


User.initiate(sequelize); //해당 User를 실행해서 초기화 시키는 작업
Comments.initiate(sequelize);

// 데이터베이스 관계 설정

User.associate(db);
Comments.associate(db);




module.exports = db;
