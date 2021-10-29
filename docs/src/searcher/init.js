import renderer from "./Renderer.js";
import searcher from "./Searcher.js";

searcher.delay()
searcher.setCallback(renderer.render)
setTimeout(() => {
    searcher.search('axios')
}, 1000);
