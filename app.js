console.log("Starting");

setTimeout(() => {
    console.log("2 sec timeout");
    
}, 2000);

setTimeout( () => {
    console.log("0 sec timeout")
},0)

console.log("stopping");
