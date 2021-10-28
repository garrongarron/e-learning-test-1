import Component from "../../../js/Component.js";
import eventBus from "../../basic/EventBus.js";
import searcher from "../../searcher/Searcher.js";

class BlockCurriculum extends Component {
    setState() {
        return {
            videos: [{
                "title": 'title',
                "playlistId": 'playListID',
            }]
        }
    }
    beforeAppendChild() {
        let out = []
        searcher.loadDatabase().then(() => {
            let keys = Object.keys(searcher.database).sort(() => .5 - Math.random()).filter((v, i) => i < 15).map(key => {
                out.push({
                    "title": searcher.database[key].title,
                    "playlistId": searcher.database[key].playlistId,
                })
            })
            this.state.videos = out
            this.setNewState(this.state)
        })
    }
    goToList(e) {
        let data = {
            list: e.target.dataset.list,
            id: '',
        }
        localStorage.setItem('currentVideo', JSON.stringify(data))
        eventBus.dispatch('video-list', data)
        eventBus.dispatch('routing', '/curso.html')
    }
    addEventListener() { return ['click'] }
    template({ }) {
        return `
    <section class="block__curriculum">
        <div class="block__curriculum__710">
            <h4>Listas de reproducción </h4>
            <p>En este sitio encontrarás una amplia gama de listas de reproducción para aprender todo lo que necesitas para aprender de una manera cómoda.</p>
            <!-- <span>Example</span> -->
            <div class="block__curriculum__section">
                <h5>Listas de reproducción disponibles</h5>
                <ul>
                    ${this.state.videos.map(list => `
                    <li>
                        <span class="icon"></span>
                        <span class="description">${list.title}</span>
                        <span class="button" click="goToList" data-list="${list.playlistId}">Start</span>
                    </li>
                    `).join("")}
                </ul>
            </div>
        </div>
    </section>`
    }
}

//let content = new BlockCurriculum();
//content.querySelector('.BlockCurriculum')
export default BlockCurriculum;
