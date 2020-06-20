const express = require("express")
const path = require("path")
const hbs = require ("hbs")

const app = express()

//Define Paths for Express COnfig
const PublicDirecPath = path.join(__dirname, "../public")
const viewPath = path.join (__dirname, "../templates/views")
const partialsPath = path.join (__dirname, "../templates/partials")

//Setup handlebars engine and views location 
app.set('view engine', 'hbs')
app.set("views", viewPath)
hbs.registerPartials(partialsPath);


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
        name: "Ashriya Pokhrel"
    })
})

app.get("/help", (req,res) => {
    res.render ("help",{
        Message: "How are you. I hope you are fine and doing very well!!!",
        title: "Help",
        name: "Boltar Pokhrel"
    })
})

app.get("/weather", (req,res)=> {
    res.send({
        forecast: "Cloudy",
        location: "KTM"
    })
})

app.get( '/help/*', (req,res) => {
    res.render("error",{
        title: "404 Page Error",
        Message: "Help Article Page not Found",
        name: "ashish boltar"
    })
})

app.get("*", (req,res) => {
    res.render("error",{
        title: "404 Page Error",
        Message: "Page not Found",
        name: "ashish pokhrel"
    })
})

app.listen(3000, () => {
    console.log("Server 3000 Started.");
    
})