

function render() {

    const content = document.getElementById("content");

    const main = document.createElement('div');
    main.classList.add('main');
    

    // add text box
    const textbox = document.createElement('div');
    textbox.classList.add('textbox');
    const name = document.createElement('h1');
    name.classList.add('name');
    name.textContent = "About";
    
    const copy = document.createElement('p');
    copy.classList.add('copy');
    copy.textContent = "lorem ipsum iuetgheuoighe eoigjetrog egeg gtrg";

    textbox.appendChild(name);
    textbox.appendChild(copy);


    main.appendChild(textbox);
    content.appendChild(main);

}

export { render as renderAbout };