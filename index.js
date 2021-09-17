const csv = require('csv-parser');
const  fs = require('fs');
const results = [];
let address = require('address');

fs.createReadStream('dhcp.csv')
    .pipe(csv({}))
    .on('data',(data) => results.push(data));

fs.createReadStream('excluded.csv')
    .pipe(csv({}))
    .on('data',(data) => results.push(data));

fs.createReadStream('reserved.csv')
    .pipe(csv({}))
    .on('data',(data) => results.push(data))
    .on('end',() => {
        console.log(results)
    });




console.log(address.ip() + " Ez az IP");
console.log(address.ipv6() + " Ez az IPV6");

 address.mac(function (err,add){
    console.log(add + " MAC cím");
});


const http = require('http')

const port = 3000;

const server = http.createServer((req, rel) => {
    rel.write('Hello World')
    rel.statusCode = 200;
    rel.end(' END')
});

server.listen(port, function (error){
    if (error){
        console.log("404");
    }else {
        console.log(`Server running at http:///localhost:` + port);
    }
});



