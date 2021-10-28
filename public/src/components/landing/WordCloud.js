import Component from "../../../js/Component.js";
import eventBus from "../../basic/EventBus.js";

class WordCloud extends Component {
    setState() {
        let w = `javascript html css array arrow flex grid module es6 callback event json react vue angular variable fetch`
        return { words: w.split(' ') }
    }
    addEventListener() { return ['click'] }
    search(e) {
        console.log(e.target.innerText);
        e.target.value = e.target.innerText
        localStorage.setItem('word', e.target.value)
        eventBus.dispatch('to-seach', e)
        eventBus.dispatch('routing', '/cursos.html')
    }
    template({ }) {
        return `<section class="word-cloud">
            <div class="container">
                ${this.state.words.map(word => `<span class="word" click="search">${word}</span>`).join('')}
            </div>
        </section>`
    }
}

export default WordCloud;
