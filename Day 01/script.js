// Regular function
function sum(){
            let a=10;
            let b=10;
            console.log(a+b)
        }
sum()

// Arrow function
const sum=(a,b)=>{
    console.log(a+b)
}
sum=(12,13)

// Same command as both arrow and regular functions:
// 1. Regular function
function demo(a){
    return a;
}
console.log(demo(5))

// 2. Arrow function
const demo=(a)=>a;
console.log(demo(5))

// Callback function
callback()=demo()
function sample(callback){
    console.log("sample")
    callback()
}
function demo(){
    console.log("demo")
}
sample(demo)

// Map method
let numbers= [1,2,3];
let doubled = numbers.map((x) => x);
console.log(doubled)