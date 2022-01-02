import { makeLogo } from "./home";
import { makeTitle } from "./menu";

export default function loadAbout() {
    const main = document.querySelector('main');
    main.innerHTML = '';

    main.appendChild(makeAbout());
}

function makeAbout() {
    const about = document.createElement('div');
    about.id = 'about';

    about.append(makeTitle('Info'), makeAboutContent(), makeCredits());

    return about;
}

function makeAboutContent() {
    const aboutContent = document.createElement('div');
    aboutContent.id = 'aboutContent';

    const aboutText = document.createElement('div');
    aboutText.id = 'aboutText';

    const time = makeText('⌚ Mon-Thurs: 7.30-21.30<br>Fri-Sun: 9.00-23.30');
    time.id = 'time';

    const contact = makeText('📞 (420)-666 6921');
    const location = makeText(`📍 ${makeLogo().innerHTML} Location`);

    aboutText.append(time, contact, location);

    aboutContent.append(aboutText, makeMap());

    return aboutContent;
}

function makeText(content) {
    const para = document.createElement('p');
    para.innerHTML = `${content}`;

    return para;
}

function makeMap() {
    const map = document.createElement('iframe');

    map.src = `https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d908763.402456889!2d-58.800213383252725!3d-63.58533034631754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-63.349765!2d-57.5257994!5e0!3m2!1sen!2s!4v1641095520037!5m2!1sen!2s`;
    map.width = `400`;
    map.height = `300`;
    map.style = 'border: 0;';
    map.setAttribute('allowfullscreen', '');
    map.setAttribute('loading', 'lazy');

    return map;
}

function makeCredits() {
    const credits = document.createElement('div');
    credits.id = 'credits';

    credits.append(
        makeText(`<p>Logo Font by <a href="https://www.instagram.com/balpirick_studio/">balpirick</a></p>`),
        makeText(`<p>Background Photo by <a href="https://unsplash.com/@mggbox?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mgg Vitchakorn</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>`)
    )

    return credits;
}