// const Sequelize = require('sequelize'); // 대문자는 클래스 (이 모듈에 대한 클래스) sequelize 익스턴스를 만들 때는 소문자

// 유저정보
// class User extends Sequelize.Model{     // User에게 Sequelize의 데이터를 상속해준다.
//     static initiate(sequelize){         // sequelize 초기화 상속을 받으면 기본값을 초기화 해줘야한다.
//         User.init({                     // User 테이블의 초기값 설정  init각 컬럼의 정보가 init안에 들어가야한다.
//             name:{
//                 type: Sequelize.STRING(20), //datatype
//                 allowNull: false, // not Null 
//                 unique : false,  //(unique))유니크 해야하니?
//             },
//             age:{
//                 type: Sequelize.INTEGER.UNSIGNED, //숫자말고 정수를 담아라 //양의 정수 -들어오면 안된다.
//                 allowNull: false, // 반드시 들어오ㅏ야지 Not Null 
//             },
//             married:{
//                 type: Sequelize.BOOLEAN, // true, false 로 데이터 사용 
//             },
//             comment:{
//                 type: Sequelize.TEXT, // text type
//                 allowNull: true,
//             },
//             create_at:{
//                 type: Sequelize.DATE, // Date(시간포함), Dateonly(날짜만)
//                 allowNull: false,
//                 defaultValue: Sequelize.NOW, // 현재 시간이 기본값
//             },
//         },{
//             sequelize,  // 모델에 대한 정보 
//             timestamps:false, // 자동으로 시간을 기록(createAt날자 생성을 자동, UpdateAt업데이트 되면 자동으로 시간)필드 생성 하지 않음
//             underscort: false, // ___언더바 테이블,컬럼명등의 명명을 스네이트 표기법으로 사용하지 않겠다. 카멜표기법 쓸거다 startBucks
//             modelName : 'User', //모델이름
//             tableName: 'users', // 실제 테이블의 이름
//             paranoid:false,  // 삭제된 데이터 복구가능 하게 할거냐
//             charset:'utf8', // utf8로 데이터 인코딩 해줌
//             collate: 'utf8_general_ci' // utf8로 데이터 인코딩 해준다.
//         })
//     }
//     static associate(db){
//         db.User.hasMany(db.Comments, { foreignKey : 'commenter', sourceKey: 'id'})
//     }
// }


// module.exports = User;
const Sequelize = require('sequelize');


class User extends Sequelize.Model{
    static initiate(sequelize){ // sequelize 초기화
        User.init({ // User 테이블의 초기값 설정
            name:{
                type: Sequelize.STRING(20), //datatype
                allowNull: false, // Not NUll
                unique: true // Unique 값
            },
            age: {
                type: Sequelize.INTEGER.UNSIGNED, //양의 정수
                allowNull: false // Not Null
            },
            married:{
                type: Sequelize.BOOLEAN // true, false 로 데이터 사용
            },
            comment:{
                type: Sequelize.TEXT, // text type
                allowNull: true,
            },
            create_at:{
                type: Sequelize.DATE, // Date(시간포함), DATEONLY(날짜만)
                allowNull: false,
                defaultValue: Sequelize.NOW, //현재 시간이 기본값

            },
        },{
            sequelize, // 모델에 대한 정보 
            timestamps: false, // 자동으로 시간 기록(createAt, UdateAt)필드 생성 하지 않음
            underscored: false, // 테이블, 컬럼명등의 명명을 스네이트 표기법을 사용하지 않겠다.
            modelName: 'User', // 모델이름
            tableName: 'users', // 실제 테이블의 이름
            paranoid: false, // 삭제된 데이터 복구 가능
            charset: 'utf8', // utf8로 데이터 인코딩
            collate: 'utf8_general_ci'
        })
    }
    static associate(db){
        db.User.hasMany(db.Comments, { foreignKey:'commenter', sourceKey: 'id'})
    }
}

module.exports = User;

