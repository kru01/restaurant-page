import { loadHome } from "./home";
import { loadMenu } from "./menu";
import loadAbout from "./about";

export { makeSidebar, activateButton };

function makeSidebar() {
    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar';

    sidebar.append(
        makeHeader(),
        makeStarBreaks(),
        makeNavContainer(),
        makeStarBreaks(),
        makeFooter()
    );

    return sidebar;
}

function makeStarBreaks() {
    const starBreaks = document.createElement('span');
    starBreaks.classList.add('starBreaks');

    const span = document.createElement('span');
    span.textContent = '⭐';

    starBreaks.append('✨', span, '✨');

    return starBreaks;
}

function makeHeader() {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');

    const span = document.createElement('span');
    span.classList.add('legit');
    span.textContent = 'Legit';

    h1.append('Totally', span);
    header.appendChild(h1);

    return header;
}

function makeNavContainer() {
    const navContainer = document.createElement('div');
    navContainer.id = 'navContainer';

    const span = document.createElement('span');
    span.textContent = '🍽';
    
    const nav = document.createElement('nav');

    const homeButton = makeNavButton('Home', 'homeButton');
    const menuButton = makeNavButton('Menu');
    const aboutButton = makeNavButton('About', 'aboutButton');

    nav.append(homeButton, menuButton, aboutButton);
    navContainer.append(span, nav);

    return navContainer;
}

function makeNavButton(content, id) {
    const button = document.createElement('button');
    button.classList.add('navButtons');
    button.textContent = content;

    button.addEventListener('click', navButtonClicked);

    if(!id) return button;
    button.id = id;

    return button;
}

function navButtonClicked() {
    if(this.classList.contains('activeButton')) return;

    activateButton(this);
    
    switch(this.textContent) {
        case 'Menu':
            loadMenu();
            return;

        case 'About':
            loadAbout();
            return;

        default: loadHome();
    }
}

function activateButton(button) {
    const buttons = document.querySelectorAll('.navButtons');

    buttons.forEach(button => button.classList.remove('activeButton'));

    button.classList.add('activeButton');
}

function makeFooter() {
    const footer = document.createElement('footer');

    const para = document.createElement('p');
    para.textContent = 'Code by';

    const imgLink = makeProfileLink();

    const profilePic = document.createElement('img');
    profilePic.id = 'profile';
    profilePic.src = 'images/githubPic.jpg';

    imgLink.appendChild(profilePic);

    const profileText = makeProfileLink();
    profileText.id = 'profileText';
    profileText.textContent = 'kru01';

    footer.append(para, imgLink, profileText);
    
    return footer;
}

function makeProfileLink() {
    const link = document.createElement('a');
    link.target = '_blank';
    link.href = 'https://github.com/kru01';

    return link;
}