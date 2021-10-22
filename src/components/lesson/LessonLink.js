import Component from "../../../js/Component.js";
import eventBus from "../../basic/EventBus.js";

class LessonLink extends Component {
    doSomething(e) {
        let video = e.target.getAttribute('data-video')
        eventBus.dispatch('loadVideo', video)
        e.stopPropagation()
    }
    addEventListener() { return ['click'] }
    template({ }) {
        return `<div >                
                ${this.map('videos', link => `
                <div class="card" >
                    <img src="${link.img}" click="doSomething" data-video="${link.videoId}">
                    <div class="title" click="doSomething" data-video="${link.videoId}">${link.title}</div>
                </div>
                `)}
            </div>`
    }
}

export default LessonLink;