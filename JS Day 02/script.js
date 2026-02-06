// For loop
for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= i; j++){
        console.log(j);
    }
    console.log(i);
}

// Map Method
let arr = [1,2,3,4,5]
let result = arr.map((x)=>x)
console.log(result);

// Filter Method
let scores = [12,7,22,15,32,6,4,27,11,16]
let highScores = 
scores.filter((score) =>(
    if(score >= 15){
        console.log(score, "pass");
    }
    else{
        console.log(score, "fail");
    }
));

// Reduce Method
let numbers = [1,2,3,4,5]
for(let i=1; numbers.length;i++){
    sum = sum + numbers[i]
}