import Menu from "../menuitems.json";

function render() {
    

    console.log(Menu);
    const content = document.getElementById("content");

    const main = document.createElement('div');
    main.classList.add('main');
    

    // build menu using menuitems.json

    for (let i = 0; i < Menu.length; i++) {
        const dish = Menu[i];
        console.log(dish);
        

    // add text box
    const textbox = document.createElement('div');
    textbox.classList.add('textbox');
    const name = document.createElement('h1');
    name.classList.add('name');
    name.textContent = dish.name;
    
    const copy = document.createElement('p');
    copy.classList.add('copy');
    copy.textContent = dish.description;

    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = dish.price;

    textbox.appendChild(name);
    textbox.appendChild(copy);

    main.appendChild(textbox);
    };



    content.appendChild(main);

}

export { render as renderMenu };