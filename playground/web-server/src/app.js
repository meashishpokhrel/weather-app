const express = require("express")
const path = require("path")

const app = express()

//Define Paths for Express COnfig
const PublicDirecPath = path.join(__dirname, "../public")
const viewPath = path.join (__dirname, "../templates")

//Setup handlebars engine and views location 
app.set('view engine', 'hbs')
app.set("views", viewPath)

//Setup static directory to serve
app.use(express.static(PublicDirecPath))

app.get("/",(req,res) => {
    res.render("index",{
        title: "Home",
        name: "Ashish Pokhrel"
    })
})

app.get("/about", (req,res) => {
    res.render ("about",{
        title: "About",
        name: "Ashish Pokhrel"
    })
})

app.get("/help", (req,res) => {
    res.render ("help",{
        Message: "How are you. I hope you are fine and doing very well!!!",
        Title: "Help"
    })
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