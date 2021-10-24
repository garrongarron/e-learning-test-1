// import '../js/videojs/video.js'
import Layout from "./components/lesson/Layout.js";
import cssloader from "./CssLoader.js";


setTimeout(() => {
    let main = new Layout();
    let x = document.querySelector('.layout')
    if (x) x.parentNode.removeChild(x);
    main.querySelector('body')
    console.log('a');
}, 1000)

let folder = 'src/components/lesson/css/'
let cssList = [
    'lesson__message.css',
    'lesson__quiz.css',
    'lesson__video.css',
    'lesson__videoplayer.css',
    'lesson__header.css',
    'lesson__main.css',
    'lesson__aside.css',
    'lesson__loader.css',
];
cssloader(folder, cssList)