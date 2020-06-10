const request = require ('request');

const weatherkey ="983602e542cbc966fe476183185985b8";

const url="http://api.weatherstack.com/current?access_key=983602e542cbc966fe476183185985b8&query=27.7172,85.3240";
//For another API (Open Weather)
//URL = api.openweathermap.org/data/2.5/weather?q=kathmandu&units=metric&appid=5c66a5798520d0130d3d372259a826cf
//console.log(data.main.temp);

request({url: url, json: true}, (err,res) =>{
    if (err){
        console.log("Unable to Connect to the netwoek");
    }
    else if(res.body.error){
        console.log("Unable to find the location");
        
    }
    else{
        const data=(res.body);    
        console.log("It is Currently " + data.current.temperature + " degress." + "There is a " + data.current.precip + "% chance to rain. " + " The sky is " + data.current.weather_descriptions[0]);
    }  
});

//Geocoding
 const latlonkey ="pk.eyJ1IjoiMGJvbHRhcjEiLCJhIjoiY2tiOTdrcmR0MDVmMTJxcGdwaWxtb3o1eiJ9.8wUyHTYH6hYTP-BzHuC9Sw"

 const geoUrl="https://api.mapbox.com/geocoding/v5/mapbox.places/kathmandu.json?access_token=pk.eyJ1IjoiMGJvbHRhcjEiLCJhIjoiY2tiOTdrcmR0MDVmMTJxcGdwaWxtb3o1eiJ9.8wUyHTYH6hYTP-BzHuC9Sw";

 request({url: geoUrl, json:true}, (err,res) => {
     if (err){
        console.log("Unable to connect to the network");
     }
     else if (res.body.features.length ===0){
         console.log("Unable to find the location");
         
     }
     else{
        const data1=(res.body);
        const latitude=data1.features[0].center[1];
        const longitude=data1.features[0].center[0];
        console.log("The latitude is " + latitude + " The longitude is " + longitude);
     } 
 });

