const csv = require('csv-parser');
const  fs = require('fs');


//MAC-IP páros
const reserved = [fs.createReadStream('reserved.csv')
    .pipe(csv({}))
    .on('data',(data) => reserved.push(data))
    .on('end',() => {
    })];

//nem osztható IP
const excluded = [fs.createReadStream('excluded.csv')
    .pipe(csv({}))
    .on('data',(data) => excluded.push(data))
    .on('end',() => {
    })];

//kiosztott MAC-IP páros
const dhcp = [fs.createReadStream('dhcp.csv')
    .pipe(csv({}))
    .on('data',(data) => dhcp.push(data))
    .on('end',() => {
    })];



class DHCP  {
    constructor(release, request) {
        this.release = release; //ip felszabaditasa
        this.request = request; //mac cimhez ip rend.
    }
    request(MAC){

    }
    release(IP){
        
    }
}
result = new DHCP();

