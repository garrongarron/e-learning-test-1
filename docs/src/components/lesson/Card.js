import Component from "../../../js/Component.js";
import eventBus from "../../basic/EventBus.js";
import Pixel from "../../basic/Pixel.js";
import searcher from "../../searcher/Searcher.js";

class Card extends Component {
    //	setState() { return { n: JSON.parse(localStorage.getItem('n')) || 0 } }
    //	setChildComponent() { return [Header]; }
    addEventListener() { return ['click'] }
    doSomething(e) {
        let video = e.target.getAttribute('data-video')
        eventBus.dispatch('loadVideo', video)
        let current = localStorage.getItem('currentVideo') || null
        if (!current) return
        let data = JSON.parse(current)
        data.videos = searcher.database[data.list].list
        data.id = video
        localStorage.setItem('currentVideo', JSON.stringify(data))
        eventBus.dispatch('nextPrevVideo', data)
        e.stopPropagation()
    }
    beforeAppendChild(parent) {
        let img = parent.querySelector('img')
        let container = parent.querySelector('.card-img')
        
        setTimeout(() => {
            let watchMe = new IntersectionObserver(
                (data) => {
                    if (data[0].isIntersecting) {
                        img.src = container.dataset.img
                        img.addEventListener('load', () => {
                            img.classList.add('img-opacity1')
                        })
                    }
                },
                {
                    threshold: [0.1]
                }
            );
            watchMe.observe(img);
        }, 200);
    }
    template({ data: link }) {
        // console.log(link);
        return `<div class="card videos" > 
        <div class="card-img" data-img="${link.img}" data-lengthText="${link.lengthText}">
            <img src="${Pixel}" click="doSomething" data-video="${link.videoId}">
            <div class="lengthText">${link.lengthText}</div>
        </div>
        <div class="title" click="doSomething" data-video="${link.videoId}">${link.title}</div>
    </div>`
    }
}

//let content = new Card();
//content.querySelector('.Card')
export default Card;