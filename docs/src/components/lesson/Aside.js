import Component from "../../../js/Component.js";
import eventBus from "../../basic/EventBus.js";
import searcher from "../../searcher/Searcher.js";
import LessonLink from "./LessonLink.js";

class Aside extends Component {
    setChildComponent() { return [LessonLink]; }
    process(list) {
        this.state.list = list
        this.setNewState(this.state)
    }
    currentVideo() {
        let current = localStorage.getItem('currentVideo') || null
        if (current) {
            let data = JSON.parse(current)
            eventBus.dispatch('nextPrevVideo', {
                videos: searcher.database[data.list].list,
                id: data.id
            })
        }
    }
    beforeAppendChild() {
        // this.currentVideo()
        searcher.loadDatabase().then(a => {
            let items = Object.keys(searcher.database)
            let key = items[Math.floor(Math.random() * items.length)]
            let current = localStorage.getItem('currentVideo') || null
            if (current) {
                let data = JSON.parse(current)
                key = data.list
                eventBus.dispatch('loadVideo', data.id)
                this.process(searcher.database[key].list)
                eventBus.dispatch('nextPrevVideo', {
                    videos: searcher.database[data.list].list,
                    id: data.id
                })
            }
        })
        eventBus.subscribe('video-list', data => {
            this.process(searcher.database[data.list].list)//list
            if (data.id == '') {
                data.id = searcher.database[data.list].list[0].videoId
            };
            let next = {
                videos: searcher.database[data.list].list,
                id: data.id
            }
            eventBus.dispatch('nextPrevVideo', next)
            eventBus.dispatch('loadVideo', data.id)
        })
    }

    videos() { return this.state.list }

    template({ }) {
        this.state.list = this.state.list || []
        return `
    <aside class="lesson__aside">
        <div class="card progress">
            <h2>3d Game Creations</h2>
            <div class="bar">
                <div class="quantity"></div>
            </div>
            <div class="desription">
                <span class="percentage">0</span>%
                <span>Complete</span>
            </div>
        </div>
        <LessonLink videos="videos"></LessonLink>
    </aside>`
    }
}

export default Aside;
//${this.state.list.map(video=>`<div class="card">${video.title}</div>`).join('')}