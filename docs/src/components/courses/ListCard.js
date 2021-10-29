import Component from "../../../js/Component.js";
import eventBus from "../../basic/EventBus.js";

class ListCard extends Component {
    addEventListener() { return ['click'] }
    go(e) {
        let data = {
            list: e.currentTarget.dataset.list,
            id: e.currentTarget.dataset.id,
        }
        localStorage.setItem('currentVideo', JSON.stringify(data))
        eventBus.dispatch('video-list', data)
        eventBus.dispatch('routing', '/curso.html')
        eventBus.dispatch('nextPrevVideo', {
            videos: searcher.database[e.currentTarget.dataset.list].list,
            id: e.currentTarget.dataset.id
        })
    }
    template({ data }) {
        let { title, img, interactionCount, type, id, uploadDate, list } = data
        return `
        <div class="card-list">
            <div class="card-info" click="go" data-list="${id}" data-id="">
                <h2>${title}</h2>
                <!-- <strong>${JSON.stringify(data)}</strong> -->
                
            </div>
        </div>`
    }
}

export default ListCard;