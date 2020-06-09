const request = require ('request');

const key ="983602e542cbc966fe476183185985b8";

const url="http://api.weatherstack.com/current?access_key=983602e542cbc966fe476183185985b8&query=Kathmandu";

request({url: url}, (err,res) =>{
    const data=JSON.parse(res.body);    
    console.log("It is Currently " + data.current.temperature + " degress." + "There is a " + data.current.precip + "% chance to rain. " + " The sky is " + data.current.weather_descriptions[0]);
    
});

//console.log(data.main.temp);

//For another API (Open Weather)
//URL = api.openweathermap.org/data/2.5/weather?q=kathmandu&units=metric&appid=5c66a5798520d0130d3d372259a826cf
