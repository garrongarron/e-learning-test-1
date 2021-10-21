import Layout from "./components/landing/Layout.js";
import cssloader from "./CssLoader.js";
import init from './tools/auth/index.js'

setTimeout(() => {
    let layout = new Layout();
    document.body.innerHTML = ''
    document.body.appendChild(layout.exec())
    init()
}, 500);


let folder = 'src/components/landing/css/'
let cssList = [
    'block__banner.css',
    'block__column.css',
    'block__curriculum.css',
    'block__email_leads.css',
    'block__featured-products.css',
    'block__image-with-text.css',
    'block__pricing.css',
    'block__text.css',
    
    'footer.css',
    'header.css',
];
cssloader(folder, cssList)