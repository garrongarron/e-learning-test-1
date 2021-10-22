import Component from "../../../js/Component.js";
import LessonLink from "./LessonLink.js";

class Aside extends Component {
    setChildComponent() { return [LessonLink]; }
    process(list) {
        this.state.list = list
        this.setNewState(this.state)
    }
    beforeAppendChild() {
        let a = []
        fetch('api/lessons.json')
            .then(a => a.json())
            .then(data => {
                data.forEach(video => {
                    let info = {
                        title: video.playlistPanelVideoRenderer.title.simpleText,
                        img: video.playlistPanelVideoRenderer.thumbnail.thumbnails[0].url,
                        videoId: video.playlistPanelVideoRenderer.videoId,   
                    }
                    // console.log(info);
                    a.push(info)
                })
                this.process(a)
            })
    }
    
    videos(){ return this.state.list }

    template({ }) {
        this.state.list = this.state.list || []
        return `
    <aside class="lesson__aside">
        <div class="card">
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