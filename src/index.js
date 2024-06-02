import './style.css';
import Logo from './odin-restaurant-logo.png';
import {generateHomeContent} from './home.js';

function addLogo () {
    const navLogo = new Image(100,100);
    navLogo.src = Logo;
    const homeNav = document.querySelector('#home');
    homeNav.appendChild(navLogo);
}

function renderContent (content) {
    const body = document.querySelector('body');
    body.appendChild(content);

}

function clearContent () {
    const body = document.querySelector('body');
    body.removeChild(container);
}

addLogo();
renderContent(generateHomeContent());


