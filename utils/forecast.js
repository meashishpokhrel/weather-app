const request = require("request")

const forecast = (lat,long,callback) => {
    const url="http://api.weatherstack.com/current?access_key=983602e542cbc966fe476183185985b8&query="+ lat + "," + long
    request({url: url, json: true}, (err,res) =>{
        if (err){
            callback("Unable to Connect to the netwoek",undefined)
        }
        else if(res.body.error){
            callback("Unable to find the location",undefined)
            
        }
        else{
            const data=(res.body)    
            callback("It is Currently " + data.current.temperature + " degress." + "There is a " + data.current.precip + "% chance to rain. " + " The sky is " + data.current.weather_descriptions[0])
        }  
    })
}

module.exports = forecast