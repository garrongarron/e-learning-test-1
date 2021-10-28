import Component from "../../../js/Component.js";
import eventBus from "../../basic/EventBus.js";
import Card from "./Card.js";
import ListCard from "./ListCard.js";

class Results extends Component {
    setChildComponent() { return [Card, ListCard]; }
    beforeAppendChild() {
        eventBus.subscribe('search-result', (data) => {
            this.state.data = data
            try {
                this.setNewState(this.state)    
            } catch (error) {
                console.error(error);
                console.log(this.state);
            }
        })
    }
    setState() { return { data: [] } }
    template({ }) {
        return `<div class="results">
        ${this.state.data.map(card => {
            if(card.type === 'list') return `<ListCard  data='${JSON.stringify(card)}'></ListCard>`
            if(card.type === 'video') return `<Card data='${JSON.stringify(card)}' ></Card>`
            return ''
        }).join('')}
    </div>`
    }
}

//let content = new Results();
//content.querySelector('.Results')
export default Results;