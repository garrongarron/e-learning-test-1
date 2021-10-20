import Main from "./components/lesson/Main.js";
import Aside from "./components/lesson/Aside.js";
import Header from "./components/lesson/Header.js";
import cssloader from "./CssLoader.js";

let header = new Header();
header.querySelector('body')

let aside = new Aside();
aside.querySelector('body')
let main = new Main();
main.querySelector('body')
let folder =  'src/components/lesson/css/' 
let cssList = [
    'lesson__message.css',
    'lesson__quiz.css',
    'lesson__video.css',
    'lesson__header.css',
    'lesson__main.css',
    'lesson__aside.css',
];
cssloader(folder, cssList)