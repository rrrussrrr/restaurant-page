import "./styles.css"


console.log("stesttt");

const content = document.getElementById("content");
const element = document.createElement('div');
element.classList.add('header');
element.textContent = "LOL";
content.appendChild(element);