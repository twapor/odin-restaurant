import img from './hero-img.jpg'
export {generateHomeContent};

function generateHomeContent() {
    const container = document.createElement('div');
    container.id = 'container';

    const heroSection = document.createElement('div')
    heroSection.id = 'hero-section';
    container.appendChild(heroSection);

    const heroImg = new Image();
    heroImg.src = img;
    container.appendChild(heroImg);

    const heroHeader = document.createElement('h1');
    heroHeader.textContent = `Welcome to Odin's restaurant!`
    heroSection.appendChild(heroHeader);


    const heroBtnMenu = document.createElement('button');
    heroBtnMenu.id = 'hero-menu';
    heroBtnMenu.textContent = 'Menu'
    heroSection.appendChild(heroBtnMenu);

    const heroBtnAbout = document.createElement('button');
    heroBtnAbout.id = 'hero-about';
    heroBtnAbout.textContent = 'About';
    heroSection.appendChild(heroBtnAbout);

    return container

}

