import Component from "../../../js/Component.js";
import eventBus from "../basic/EventBus.js";

class Contact extends Component {
    beforeAppendChild() {
        setTimeout(() => {
            document.head.querySelector('title').innerHTML = 'Contact'
        }, 10);
        this.done = false
    }
    addEventListener() { return ['click'] }
    doSomething(e) {
        eventBus.dispatch('routing', '/index.html')
    }
    template({ }) {
        return `<div click="doSomething"> Contact - Click me</div>`
    }
}

//let content = new Contact();
//content.querySelector('.Contact')
export default Contact;