const {odd, even} = require('./Var')   // {odd, even} 이건 구조분의 할당이다.

function checkedOdd(num){
    if (num % 2) {         
        return odd        
    } else {                
        return even      
    }
}

module.exports = checkedOdd;

