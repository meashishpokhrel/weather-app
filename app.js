const request = require ('request');

const url="http://api.openweathermap.org/data/2.5/weather?q=kathmandu&units=metric&appid=5c66a5798520d0130d3d372259a826cf";

request({url: url}, (err,res) =>{
    const data=JSON.parse(res.body);    
    console.log(data.main);
    
});

//console.log(data.main.temp);