// String Methods:

// 1. slice(start, end)
let str1 = "JavaScript is fun!";
let sliced = str1.slice(0, 10);
console.log(sliced);

// 2. substring(start, end)
let str2 = "JavaScript is amazing!";
let sub = str2.substring(14, 21);
console.log(sub);

// 3. indexOf()
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const indexOfFirst = paragraph.indexOf("dog");
console.log(indexOfFirst);

// 4. replace(search, replacement)
let sentence1 = "I love JavaScript. JavaScript is powerful.";
let newSentence1 = sentence1.replace("JavaScript", "Node.js");
console.log(newSentence1);

// 5. replaceAll(search, replacement)
let sentence2 = "I love JavaScript. JavaScript is powerful.";
let newSentence2 = sentence2.replaceAll("JavaScript", "Node.js");
console.log(newSentence2);

// 6. concat(string1, string2, ...)
let firstName = "John";
let lastName = "Doe";
let fullName = firstName.concat(" ", lastName);
console.log(fullName);

// 7. trim()
let sentence3 = "   This is a sentence with spaces.   ";
let trimmed = sentence3.trim();
console.log(trimmed);

// 8. split(seperator)
let sentence4 = "I,am,a,comma,separated,sentence";
let words = sentence4.split(",");
console.log(words);

// String Variable:

let firstName1 = "John";
let lastName1 = "Doe";
let fullName1 = `${firstName1}: This is my firstname, ${lastName1}: This is my lastname`
console.log(fullName1);

let university = "K.R Mangalam";
let program = "BCA(AI/DS)"
console.log("My name is Kanishk and I'm pursuing " + program + " from " + university);
console.log(`My name is Kanishk and I'm pursuing ${program} from ${university}`);

// Spread operator = Helps to destructure the array and string.
//                   Gives access to each element.

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let newArray = [...arr1, ...arr2];
console.log(newArray);
