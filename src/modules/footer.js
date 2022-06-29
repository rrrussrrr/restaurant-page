function render() {

    const content = document.getElementById("content");

    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.textContent = "Designed by Russ";
    content.appendChild(footer);
}

export { render as renderFooter };