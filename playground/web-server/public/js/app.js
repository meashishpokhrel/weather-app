console.log("This is javscript from public.")

fetch("http://puzzle.mead.io/puzzle").then((res) => {
    res.json().then ((data) =>{
        console.log(data);  
    })  
})

fetch("http://localhost:3000/weather?address=kathmandu").then((res) => {
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
