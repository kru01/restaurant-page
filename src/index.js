import { loadHome } from './home';
import { makeSidebar } from './sidebar';

const buildWebsite = (() => {
    const content = document.getElementById('content');
    const main = document.createElement('main');

    content.append(makeSidebar(), main);
    
    loadHome();
})();