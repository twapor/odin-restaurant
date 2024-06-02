export {generateAboutContent};

function generateAboutContent () {
    const container = document.createElement('div');
    container.id = 'container';

    const header = document.createElement('h1');
    header.textContent = "About us";
    container.appendChild(header);

    return container

}