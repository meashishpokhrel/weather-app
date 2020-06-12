const request = require("request")

const forecast = (latitude,longitude,callback) => {
    const url="http://api.weatherstack.com/current?access_key=983602e542cbc966fe476183185985b8&query="+ latitude + "," + longitude
    request({url, json: true}, (err,{body}) =>{
        if (err){
            callback(undefined,"Unable to Connect to the netwoek",undefined)
        }
        else if(body.error){
            callback(undefined,"Unable to find the location",undefined)
            
        }
        else{
            callback(undefined, body.current.weather_descriptions[0] +"."+ " It is Currently " + body.current.temperature + " degress." + "There is a " + body.current.precip + "% chance to rain. " )
        }  
    })
}

module.exports = forecast