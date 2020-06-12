const request = require("request")

const forecast = (latitude,longitude,callback) => {
    const url="http://api.weatherstack.com/current?access_key=983602e542cbc966fe476183185985b8&query="+ latitude + "," + longitude
    request({url: url, json: true}, (err,res) =>{
        if (err){
            callback(undefined,"Unable to Connect to the netwoek",undefined)
        }
        else if(res.body.error){
            callback(undefined,"Unable to find the location",undefined)
            
        }
        else{
            const data=(res.body)    
            callback(undefined,"It is Currently " + data.current.temperature + " degress." + "There is a " + data.current.precip + "% chance to rain. " + " The sky is " + data.current.weather_descriptions[0])
        }  
    })
}

module.exports = forecast