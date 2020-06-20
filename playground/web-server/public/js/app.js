console.log("This is javscript from public.")



const searchButton = document.querySelector("form")
const searchInput = document.querySelector("input")

searchButton.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = searchInput.value
    fetch("http://localhost:3000/weather?address=" + location).then((res) => {
    res.json().then((data) => {
        if(data.err){
            console.log(data.err)
        }
        else{
            console.log(data.location)
            console.log(data.forecast)
        }
        
    })
})
})


