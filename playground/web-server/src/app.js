const express = require("express")

const app = express()

app.get("/", (req,res)=> {
    res.send("<h1>Hello Express</h1>")
})

app.get("/help", (req,res)=> {
    res.send([{
        name: "ashish",
    },
    {
        name: "bibek"
    }])
})

app.get("/about", (req,res)=> {
    res.send("<h1>About Page</h1>")
})

app.get("/weather", (req,res)=> {
    res.send({
        forecast: "Cloudy",
        location: "KTM"
    })
})

app.listen(3000, () => {
    console.log("Server 3000 Started.");
    
})