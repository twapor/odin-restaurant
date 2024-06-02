import './style.css';
import Logo from './odin-restaurant-logo.png';
import { generateHomeContent } from './home.js';
import { generateAboutContent } from './about.js';
import { generateMenuContent } from './menu.js';

const menu = document.querySelector('#menu')
menu.addEventListener('click', () => {
    clearContent();
    renderContent(generateMenuContent);
    console.log('our menu generated')
});

const about = document.querySelector('#about');
about.addEventListener('click', () => {
    clearContent();
    renderContent(generateAboutContent);
    console.log('about us generated')
});

function addLogo () {
    const navLogo = new Image(100,100);
    navLogo.src = Logo;
    const homeNav = document.querySelector('#home');
    homeNav.appendChild(navLogo);
    homeNav.addEventListener('click', () =>{
        clearContent();
        renderContent(generateHomeContent);
        console.log('its working')
    });
}

function renderContent (content) {
    const body = document.querySelector('body');
    body.appendChild(content());

}

function clearContent () {
    const body = document.querySelector('body');
    body.removeChild(container);
}

addLogo();
renderContent(generateHomeContent);


