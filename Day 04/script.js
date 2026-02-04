// Array Methods:

// 5. slice(start, end)
let numbers = [1,2,3,4,5];
let sliced = numbers.slice(1,4);
console.log(sliced);

// 6. some(callback)
let number = [1,3,5,7,9];
let hasEven = number.some(x => x % 2 === 0);
console.log(hasEven);

// 7. concat(array)
let fruits1 = ["apple", "banana"];
let fruits2 = ["cherry", "orange"];
let combined = fruits1.concat(fruits2);
console.log(combined);

// 8. splice(start, deleteCount, item1, item2, ...)
let fruits = ["apple", "banana", "cherry","pineapple"];
fruits.splice(2, 1, "orange", "grape");
console.log(fruits);

// 9. include()
const array1 = [1, 2, 3];
console.log(array1.includes(2));

const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
console.log(pets.includes('at'));