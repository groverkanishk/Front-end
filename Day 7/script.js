// {
//     ["X", "O", "O"],
//     ["O", "X", "O"],
//     ["O", "X", "X"]
// }

let user = {
    fullname: "Kanishk",
    address: {
        city: "Gurgaon",
        state: "Haryana"
    },
    mobile_no: 9876543210,
    favcolors: ["black", "white", "blue", "green"],
    demo: function(){
        return "demo function"
    }
}
console.log(user.fullname, user.address.city, user.address.state, user.mobile_no, user.favcolors, user.demo());

console.log("My name is " + user.fullname + ". My favorite color is " + user.favcolors[2]);

// String Literal
console.log(`My name is ${user.fullname}. My favorite color is ${user.favcolors[2]}.`);

// Object Method

// 1. Object.keys(obj)
console.log(Object.keys(user));

// 2. Object.values(obj)
console.log(Object.values(user));

// 3. Object.entries(obj)
console.log(Object.entries(user));

// 4. Object.freeze(obj)
const car = {
    company: "Mahindra",
    model: "Thar"
};
// Object.freeze(car)

// 5. Object.seal(obj)
Object.seal(car);
car.model = "XUV700";
car.color = "Black"
console.log(car);
