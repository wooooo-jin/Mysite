const dns = require('dns')
const { error } = require('console')

dns.lookup('www.naver.com', (err, address)=>{
    if (err) throw err;
    console.log(address)
});

dns.reverse('223.130.192.248', (err, hostnames)=>{ 
    if(err) throw err;
    console.log(hostnames)
});