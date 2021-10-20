import Component from "../../../js/Component.js";

class Quiz extends Component {
    template({}){
        return `
    <section class="lesson__quiz">
        <button>Quiz</button>
        <span>2/2</span>
        <div class="lesson__question">How many fingers there are in a human hand?</div>
        <ul>
            <li>option 1</li>
            <li class="selected">option 2</li>
            <li>option 3</li>
        </ul>
        <div class="lesson__buttons">
            <button class="back">Back</button>
            <button class="continue">continue</button>
        </div>
    </section>`
    }
}

export default Quiz;