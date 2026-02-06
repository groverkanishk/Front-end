const head = document.getElementById("heading");

console.log(head.innerText); // it will only show the visible text
console.log(head.textContent); // it will show all the text including the hidden text
console.log(head.innerHTML); // it will show all the text with its tags/element


// DOM Modification

// 1. Create a new element and set its content
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a dynamically created paragraph.";
console.log(newParagraph.textContent);

// 2. Append the new element to the container
const container = document.getElementById("container");
container.appendChild(newParagraph);

// 3. Remove the <p> element from the container
const elementToRemove = document.querySelector("p");
elementToRemove.remove();

// Date Method
let date = new Date()
console.log(date);

setTimeout(() => {
    console.log("welcome");
    // alert("Offer valid till 12 pm")
}, 5000)

setInterval(() => {
    let date = new Date()
    console.log(date);
}, 1000)

// Event Handling
function handleClick() {
    document.getElementById("output").textContent = "Button clicked!";
}