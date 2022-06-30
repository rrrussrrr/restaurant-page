import "./styles.css";
import {renderHeader} from "./modules/header.js";
import {renderFooter} from "./modules/footer.js";
import {renderMain} from "./modules/mainpage.js";
import {renderAbout} from "./modules/about.js";
import {renderMenu} from "./modules/menu.js";
import {renderContact} from "./modules/contact.js";

window.addEventListener('load', function() {
renderHeader();
renderMain();
renderFooter();
});

const content = document.getElementById("content");


// check for clicks on header buttons
window.addEventListener('click', function(e){
    if (e.target.classList.contains('button')) {
        if (e.target.textContent === "Home"){
            Home();
        }
        if (e.target.textContent === "About"){
            About();
        }
        if (e.target.textContent === "Menu"){
            Menu();
        }
        if (e.target.textContent === "Contact"){
            Contact();
        }
    }
});

// Load the Home page
function Home(){
    // clear DOM
    while (content.firstChild){
        content.removeChild(content.firstChild);
    }
    // remake DOM with About page
    renderHeader();
    renderMain();
    renderFooter();
}

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

// Load the Menu page
function Menu(){
    // clear DOM
    while (content.firstChild){
        content.removeChild(content.firstChild);
    }
    // remake DOM with About page
    renderHeader();
    renderMenu();
    renderFooter();
}

// Load the Menu page
function Contact(){
    // clear DOM
    while (content.firstChild){
        content.removeChild(content.firstChild);
    }
    // remake DOM with About page
    renderHeader();
    renderContact();
    renderFooter();
}




function makeElement(type, classaray, text){
    const element = document.createElement('div');
    element.classList.add(domclass);
    element.textContent = text;
    return element;
}




export {makeElement as makeElement};



