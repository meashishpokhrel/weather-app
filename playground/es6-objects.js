// Object Propery Shorthand

const name="ashish"
const userAge = 20

const user = {
    name,
    age:userAge,
    location: "ktm"
}

console.log(user)

// Object Destructor

const product = {
    label:"pri",
    age: 4,
    location: "bansthali"
}

// const {label,age:expiry,location,rating=8} = product

// console.log(label)
// console.log(expiry)
// console.log(rating)

const transaction = (type,{label,age }) =>{
    console.log(type, label ,age)
    
}
transaction("order",product)
