import { makeLogo } from "./home";

export default function loadMenu() {
    const main = document.querySelector('main');
    main.innerHTML = '';

    main.appendChild(makeMenu());
}

function makeMenu() {
    const menu = document.createElement('div');
    menu.id = 'menu';

    menu.append(makeTitle(), makeFoodGrid());
    
    return menu;
}

function makeTitle() {
    const title = document.createElement('h2');
    const outerSpan = makeLogo();
    const lineBreak = document.createElement('br');
    
    title.append(outerSpan, lineBreak, 'Menu');

    return title;
}

function makeFoodGrid() {
    const foodGrid = document.createElement('ul');
    foodGrid.id = 'foodGrid';

    foodGrid.append(
        makeFood(
            'chocolateCornet',
            'Chocolate Cornet, a corn-shaped bread filled with chocolate',
            'Chocolate Cornet',
            `"How dare you question my Chocolate Cornets!"`
        ),
        makeFood(
            'haagenDazs',
            'Häagen-Dazs Strawberry, strawberry ice cream',
            'Häagen-Dazs Strawberry',
            `"The strawberry Häagen-Dazs. Yours is still in there. Eat the damn thing."`
        ),
        makeFood(
            'mapoTofu',
            'Mapo Tofu, Chinese dish with spicy sauce and tofu',
            'Mapo Tofu',
            `"Kuuka?"`
        ),
        makeFood(
            'melonPan',
            'Melonpan, Japanese bread with melon appearance and taste',
            'Melonpan',
            `"Melon Breadmas!"`
        ),
        makeFood(
            'soup',
            'Canned soup, just canned soup',
            'Soup!',
            `"Can be stored up to 737 years!"`
        ),
        makeFood(
            'soup',
            'Canned soup, just canned soup',
            'Soup!',
            `"An atomic adventure awaits!"`
        ),
        makeFood(
            'soup',
            'Canned soup, just canned soup',
            'Another Soup!',
            `I'm out of ideas!`
        ),
        makeFood(
            'tank',
            'An abandoned snow-covered tank',
            'Tank',
            `"Hey, you think a tank tastes good?"`
        )
    );

        return foodGrid;
}

function makeFood(imgName, imgAlt, name, info) {
    const food = document.createElement('li');
    food.classList.add('food');

    const img = document.createElement('img');
    img.src = `./images/menu/${imgName}.png`;
    img.alt = `${imgAlt}`;

    const foodName = document.createElement('h3');
    foodName.textContent = `${name}`;

    const foodInfo = document.createElement('p');
    foodInfo.textContent = `${info}`;

    food.append(img, foodName, foodInfo);

    return food;
}