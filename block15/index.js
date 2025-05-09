const body = document.querySelector("body");
console.log(body);
const div = document.createElement("div");
div.textContent = "Hello World!";
// append the div to the body
body.appendChild(div);
div.style.backgroundColor = "blue";