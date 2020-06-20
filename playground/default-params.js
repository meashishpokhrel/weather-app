const sachin = (name = "ashish") => {
    console.log("I am  " + name);
    
}

sachin()

//Using default params With es6 objects destructures

const product = {
    label:"pri",
    age: 4,
    location: "bansthali"
}

const transaction = (type,{label = "iPhone",age } = {}) =>{
    console.log(type, label ,age)
    
}
transaction("order")
