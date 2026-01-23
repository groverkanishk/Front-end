// Q: Count the occuranne of "r" in the given String.
let str = "Tu meri me tera me tera tu meri"
let r = str.split("r").length - 1
console.log(r);

// Types of Functions:

// 4. First-class function
function test(a){
    return function test2(b){
        console.log("test2");
        return function test3(c){
            console.log("test3");
        }
    }
}

// test()()()
let value = test(10)
let value2 = value()
value2(15)

// 5. Anonymous function
// Map(function(){

// })

// Self invoking function or IIFE(Immediately Invoked Function Expression)
// function demo(){
//     console.log("demo");
// }

// let a = 10;
// console.log(a);

// function sample2(){
//     demo()
// }
// sample2()

(function(){
    let a = 10
    a = b
    console.log(a);
})
()
console.log(b);
