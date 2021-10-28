import Component from "../../../js/Component.js";
import eventBus from "../../basic/EventBus.js";
import Pixel from "../../basic/Pixel.js";

class Card extends Component {
    addEventListener() { return ['click'] }
    go(e) {
        let data = {
            list: e.currentTarget.dataset.list,
            id: e.currentTarget.dataset.id,
        }
        localStorage.setItem('currentVideo', JSON.stringify(data))
        localStorage.setItem('latestVideo', e.currentTarget.dataset.id)
        eventBus.dispatch('video-list', data)
        eventBus.dispatch('routing', '/curso.html')
    }
    beforeAppendChild(parent) {
        let img = parent.querySelector('img')
        let container = parent.querySelector('.card-img')
        setTimeout(() => {
            
            let watchMe = new IntersectionObserver(
                (data) => {
                    if (data[0].isIntersecting) {
                        img.src = container.dataset.img
                        img.addEventListener('load',()=>{
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
    template({ data }) {
        let { title, img, interactionCount, type, id, uploadDate, list } = data
        return `
        <div class="card">
            <div class="card-info" click="go" data-list="${list}" data-id="${id}">
                <div class="card-img" data-img="${img}">
                    <img src="${Pixel}">
                </div>
                <h2>${title}</h2>
                <!-- <span>${type}</span>
                <code>${id}</code> -->
                <!-- <date>${uploadDate}</date> -->
                <strong>${interactionCount}</strong>
                <!-- <i>${list}</i> -->
            </div>
        </div>`
    }
}

export default Card;