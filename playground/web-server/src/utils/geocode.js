const request = require("request")

const geocode = (address, callback) => {
    const geoUrl="https://api.mapbox.com/geocoding/v5/mapbox.places/" + address +".json?access_token=pk.eyJ1IjoiMGJvbHRhcjEiLCJhIjoiY2tiOTdrcmR0MDVmMTJxcGdwaWxtb3o1eiJ9.8wUyHTYH6hYTP-BzHuC9Sw"
    request({url: geoUrl, json:true}, (err,{body}) => {
        if (err){
           callback(undefined,"Unable to connect to the network" ,undefined)
        }
        else if (body.features.length ===0){
            callback(undefined,"Unable to find the location", undefined)
            
        }
        else{ 
           callback(undefined, {
             latitude:body.features[0].center[1],
             longitude:body.features[0].center[0],
             location: body.features[0].place_name
           })
        }    
    })
}

module.exports=geocode