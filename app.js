const geocode = require ("./utils/geocode")
const forecast =require("./utils/forecast")

//const weatherkey ="983602e542cbc966fe476183185985b8"
//For another API (Open Weather)
//URL = api.openweathermap.org/data/2.5/weather?q=kathmandu&units=metric&appid=5c66a5798520d0130d3d372259a826cf
//console.log(data.main.temp)


//FOrecast
forecast(27.17,85.36, (err,data) =>{
    console.log(err)
    console.log(data)   
})
//Geocoding
//  const latlonkey ="pk.eyJ1IjoiMGJvbHRhcjEiLCJhIjoiY2tiOTdrcmR0MDVmMTJxcGdwaWxtb3o1eiJ9.8wUyHTYH6hYTP-BzHuC9Sw"
geocode("Mumbai", (err,data) => {
    console.log("Error",err)
    console.log("Data-->",data)
    
})
