// Change heading color from button
// function handleClick() {
//     document.querySelector("#head").style.color = "red";

//     document.getElementById("btn").textContent = "color changed";
// }

// Show image from button
const handleClick = () => {
    const image = document.createElement("img");
    image.setAttribute("src", "https://imgs.search.brave.com/w89BqE53I9Tr_MPzcehg9QykkImE66YUNTL80mSDQuM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMTNs/b2FydGpvYzF5bi5j/bG91ZGZyb250Lm5l/dC91cGxvYWQvaW5z/dGl0dXRlL2ltYWdl/cy9sYXJnZS8yMzA4/MDkwNTQ0NTdfNXZm/aWxlX2tybXUud2Vi/cA");

    image.setAttribute("alt", "kr mangalam");

    document.getElementById("content").append(image);
}