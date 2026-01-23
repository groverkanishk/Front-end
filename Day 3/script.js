// Array Methods
// 1. push(element) 
let fruits1 = ["apple", "banana"];
let newLength1 = fruits1.push("cherry");
console.log(fruits1);
console.log(newLength1);

// 2. pop()
let fruits2 = ["apple", "banana", "cherry"];
let removed1 = fruits2.pop("cherry");
console.log(fruits2);
console.log(removed1);

// 3. shift() 
let fruits3 = ["apple", "banana", "cherry"];
let removed2 = fruits3.shift("apple");
console.log(fruits3);
console.log(removed2);

// 4. unshift(element)
let fruits4 = ["banana", "cherry"];
let newLength2 = fruits.unshift("apple");
console.log(fruits4);
console.log(newLength2);

// Q1: Reverse the array by using push() and pop() method.
let ar = [1,2,3,4,5]
let reverse = []

while(ar.length > 0){
    reverse.push(ar.pop())
}
console.log(reverse)

// Q2: Remove all negative numbers.
let arr = [-12, -5, -1, 2, 6, 9, 13]
let positive = []

while(arr.length > 0){
    let val = arr.shift
    if (val >= 0){
        positive.push()
    }
}

// Q3: Check if array is palidrone or not.
let arrr = [1,2,3,4,5]
let temp = []
let orignal = []

for(let i = 0; i < arrr.length; i++){
    orignal.push(arrr[i])
}
console.log(orignal);

while (arrr.length > 0){
    temp.push(arrr.pop());
}
console.log(temp);

for (let i = 0; i < orignal.length; i++){
    if (orignal[i] !== temp[i])
        console.log("It is not a palidrone");
    else {
        console.log("It is a palidrone")
    }
    return
}