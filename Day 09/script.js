const query = document.querySelector('#content p')
console.log(query)
query.textContent = "fkjefejwkv jefhewhf"

const h1heading = document.getElementsByTagName("h1")
for(let i = 0; i < h1heading.length; i++){
    h1heading[i].style.color = "tomato"
}

const query2 = document
console.log(query2, "query");

for(let i = 0; i < query2.length; i++){
    query2[i].textContent = "hafjkhfka vfialfh"
}

const query3 = document.getElementsByTagName("p");

for(let i = 0; i < query3.length; i++){
    if(i % 2 == 0){
        query3[i].style.color = "tomato"
    }
    else{
        query3[i].style.color = "blue"
    }
}