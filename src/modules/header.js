

function render() {

    const content = document.getElementById("content");

    const header = document.createElement('div');
    header.classList.add('header');
    
    const homebutton = document.createElement('div');
    const aboutbutton = document.createElement('div');
    const menubutton = document.createElement('div');
    const contactbutton = document.createElement('div');
    homebutton.classList.add('button');
    homebutton.textContent = "Home";
    aboutbutton.classList.add('button');
    aboutbutton.textContent = "About";
    menubutton.classList.add('button');
    menubutton.textContent = "Menu";
    contactbutton.classList.add('button');
    contactbutton.textContent = "Contact";

    header.appendChild(homebutton);
    header.appendChild(aboutbutton);
    header.appendChild(menubutton);
    header.appendChild(contactbutton);
    
    content.appendChild(header);

}

export { render as renderHeader };