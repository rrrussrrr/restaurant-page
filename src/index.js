import "./styles.css";
import {renderHeader} from "./modules/header.js";
import {renderFooter} from "./modules/footer.js";
import {renderMain} from "./modules/mainpage.js";
import {renderAbout} from "./modules/about.js";

window.addEventListener('load', function() {
renderHeader();
renderMain();
renderFooter();
});

const content = document.getElementById("content");



window.addEventListener('click', function(e){
    if (e.target.classList.contains('button')) {
        if (e.target.textContent === "About"){
            About();
        }
    }
});

// Load the About page
function About(){
    // clear DOM
    while (content.firstChild){
        content.removeChild(content.firstChild);
    }
    // remake DOM with About page
    renderHeader();
    renderAbout();
    renderFooter();
}


function makeElement(type, classaray, text){
    const element = document.createElement('div');
    element.classList.add(domclass);
    element.textContent = text;
    return element;
}




export {makeElement as makeElement};



