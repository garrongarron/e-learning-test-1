import cssLoader from "./basic/CssLoader.js";
import Routing from "./basic/Routing.js";

let folder = 'src/css/'
let cssList = [
    'font.css',
    'style.css',
];
cssLoader.load(folder, cssList)
let routing = new Routing();
routing.start()