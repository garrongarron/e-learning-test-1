import cssLoader from "./basic/CssLoader.js";
import Routing from "./basic/Routing.js";

let addBase = (host) =>{
    let base = document.head.querySelector('base')
    base = (!base)?document.createElement('base'):base
    base.href = host
    document.head.appendChild(base)
}
if(location.origin == 'https://garrongarron.github.io'){
    addBase('https://garrongarron.github.io/e-learning-test-1/')
} else{
    addBase(location.origin)
}

let folder = 'src/css/'
let cssList = [
    'font.css',
    'style.css',
];
cssLoader.load(folder, cssList)
let routing = new Routing();
routing.start()