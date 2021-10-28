import Component from "../../../js/Component.js";
import eventBus from "../../basic/EventBus.js";
import renderer from "../../searcher/Renderer.js";
import searcher from "../../searcher/Searcher.js";
import Searcher from "../searcher/Searcher.js";
import Results from "./Results.js";

class Main extends Component {
    setChildComponent() { return [Results]; }
    template({ }) {
        return `
        <main class="searcher-main"> 
            <div class="container">
                <Results></Results>
            </div>
        </main>`
    }
}

//let content = new Main();
//content.querySelector('.Main')
export default Main;