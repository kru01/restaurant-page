import { loadMenu } from "./menu";
import { activateButton } from "./sidebar";

export { loadHome, makeLogo };

function loadHome() {
    const main = document.querySelector('main');
    main.innerHTML = '';

    main.appendChild(makeHome());
}

function makeHome() {
    const home = document.createElement('div');
    home.id = 'home';

    const line = document.createElement('hr');

    const para = document.createElement('p');
    para.textContent = 'A very real restaurant that sells high-quality foods!';

    const img = document.createElement('img');
    img.src = 'images/popTeamEpic.png';
    img.alt = 'Popuko from Pop Team Epic giving two thumbs up';

    const button = document.createElement('button');
    button.textContent = 'Check out our menu!';

    button.addEventListener('click', () => {
        activateButton(document.getElementById('homeButton').nextElementSibling);
        loadMenu();
    });

    home.append(makeTitle(), line, para, img, button);

    return home;
}

function makeTitle() {
    const title = document.createElement('h2');
    const lineBreak = document.createElement('br');
    
    const outerSpan = makeLogo();
    
    title.append('WELCOME TO', lineBreak, outerSpan);

    return title;
}

function makeLogo() {
    const outerSpan = document.createElement('span');
    
    const innerSpan = document.createElement('span');
    innerSpan.classList.add('legit');
    innerSpan.textContent = 'Legit';
    
    outerSpan.append('Totally', innerSpan);

    return outerSpan;
}