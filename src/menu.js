export {generateMenuContent};

function generateMenuContent () {
    const container = document.createElement('div');
    container.id = 'container';

    const header = document.createElement('h1');
    header.textContent = "Our menu";
    container.appendChild(header);
    
    return container

}