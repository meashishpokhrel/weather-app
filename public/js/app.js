console.log("This is javscript from public.")



const searchButton = document.querySelector("form")
const searchInput = document.querySelector("input")
const msgOne = document.querySelector("#msg-1")
const msgTwo = document.querySelector("#msg-2")



searchButton.addEventListener('submit', (e)=>{
    e.preventDefault()

    msgOne.textContent = "Loading..."
    msgTwo.textContent = ""
    const location = searchInput.value
    fetch("/weather?address=" + location).then((res) => {
    res.json().then((data) => {
        if(data.err){
            msgOne.textContent = data.err
        }
        else{
            msgOne.textContent =data.location
            msgTwo.textContent =data.forecast
        }
        
    })
})
})


