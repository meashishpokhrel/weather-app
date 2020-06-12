const express = require("express")
const path = require("path")

const app = express()
const PublicDirecPath = path.join(__dirname, "../public")

app.use(express.static(PublicDirecPath))


app.get("/weather", (req,res)=> {
    res.send({
        forecast: "Cloudy",
        location: "KTM"
    })
})

app.listen(3000, () => {
    console.log("Server 3000 Started.");
    
})