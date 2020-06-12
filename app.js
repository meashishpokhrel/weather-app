const geocode = require ("./utils/geocode")
const forecast =require("./utils/forecast")

//const weatherkey ="983602e542cbc966fe476183185985b8"
//For another API (Open Weather)
//URL = api.openweathermap.org/data/2.5/weather?q=kathmandu&units=metric&appid=5c66a5798520d0130d3d372259a826cf
//console.log(data.main.temp)
//  const latlonkey ="pk.eyJ1IjoiMGJvbHRhcjEiLCJhIjoiY2tiOTdrcmR0MDVmMTJxcGdwaWxtb3o1eiJ9.8wUyHTYH6hYTP-BzHuC9Sw"

const location = process.argv[2]
// const  = geocode

if (!location){
    console.log("Please Provide the address");
}
else{
    geocode(location, (err,{latitude, longitude, location}) => {
        if (err){        
            return console.log(err)
        }
        forecast(latitude,longitude, (err,forecastData) =>{
    
            if (err){
                return console.log(err);
            }
    
            console.log(location)
            console.log(forecastData)   
        })
    })
}

