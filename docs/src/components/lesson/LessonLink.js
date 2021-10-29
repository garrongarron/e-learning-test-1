import Component from "../../../js/Component.js";
import eventBus from "../../basic/EventBus.js";
import Card from "./Card.js";

class LessonLink extends Component {
    setChildComponent() { return [Card]; }
    template({ }) {
        return `<div class="lesson-list" >                
                ${this.map('videos', link => `
                <Card data='${JSON.stringify(link)}'></Card>
                `)}
            </div>`
    }
}

export default LessonLink;