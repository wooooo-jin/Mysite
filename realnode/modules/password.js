const crypto = require('crypto')

const hash = crypto.createHash('sha256').update('abcdefghijklmnop').digest('hax');
const hash2 = crypto.createHash('sha256').update('a').digest('hax');

console.log(hash)
console.log(hash2)
// 비밀번호, 솔트, 반복 횟수, 생성될 키의 길이, 해시 알고리즘을 지정합니다.
crypto.pbkdf2('abcdefghijklmnop', 'gotohome', 100000, 64, 'sha512', (err, derivedkey)=>{
    if(err) throw err;
    console.log(derivedkey.toString('hex'))
})

const algorith = 'aes-256-cbc';
const key = crypto.randomBytes(32);  // key는 서로 약속
const iv = crypto.randomBytes(16);   // iv는 무슨 값이 들어 오든 key와 알고리즘을 초기화 시켜주는 문자

// 암호화
const cipher = crypto.createCipheriv(algorith, key, iv)
let encrypted = cipher.update('strongpassword', 'utf8', 'base64')
encrypted += cipher.final('base64');


//복호화
const decipher = crypto.createCipheriv(algorith, key, iv)
let decrypted = decipher.update(encrypted, 'base64', 'utf8')
decrypted += decipher.final('utf8')

console.log(encrypted)
console.log(decrypted)