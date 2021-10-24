import Component from "../../../js/Component.js";
import cache from "../../basic/Cache.js";
import eventBus from "../../basic/EventBus.js";
import VideoController from "../../videocontroller/VideoController.js";
import videoProvider from "../../VideoProvider.js";
import currentTimeManager from "./CurrentTimeManager.js";
import spinner from "./Spinner.js";
import videoResizing from "./VideoResizing.js";

class VideoComponet extends Component {
    setChildComponent(){ 
        return [VideoController]
    }
    setState() {
        eventBus.subscribe('loadVideo', (video) => {
            if (!video) return console.error("Video null", video)
            this.done = false
            let node = document.querySelector('video')
            if (node) node.pause()
            localStorage.setItem('latestVideo', video)
            this.setNewState({ video })
        })
        
        return {
            video: localStorage.getItem('latestVideo') || 'rr2H086z16s'
        }
    }

    beforeAppendChild(parent) {
        let section = parent.children[0];
        let div = section.children[0];
        let relative = div.children[0];
        // let video = relative.children[0];
        let video = relative.querySelector('video')
    //     this.mask = relative.children[1];
    //     this.mask.appendChild(spinner)
    //     video.classList.add('hide')
    //     videoProvider.getUrl(this.state.video).then(url => {
    //         video.src = url[0].url
    //         // video.play()
    //         setTimeout(() => {
    //             // video.removeAttribute('src')
    //         }, 100);
            
            
    //         video.addEventListener('loadeddata', () =>{
    //             console.log(video.readyState);
    //             let color = 'yellow'
    //             if (video.readyState >= 2) {
    //                 color = 'green'
    //                 video.classList.remove('hide')
    //                 cache.appendChild(spinner)
    //             }
    //             div.style.border = `2px solid ${color}`;
    //             video.currentTime = currentTimeManager.getCurrentTime(this.state.video)
    //             let current = () => {
    //                 currentTimeManager.setCurrentTime(this.state.video, video.currentTime)
    //             }
    //             video.addEventListener('mouseup', ()=>{
    //                 console.log('up');
    //                 setTimeout(() => {
    //                     current()
    //                 }, 100);
    //             })
    //             setInterval(current, 5000);

    //         });
            videoResizing(section, div, video)
    //     })

    //     let watchMe = new IntersectionObserver(
    //         function (data) {
    //             if (!data[0].isIntersecting && video.readyState == 4) {
    //                 // div.style.transition = 'all 0.8s'
    //                 div.classList.add('miniature')
    //             } else {
    //                 div.classList.remove('miniature')
    //             }
    //         },
    //         {
    //             threshold: [0.7]
    //         }
    //     );
    //     watchMe.observe(section);
    }
    template({ }) {
        return `<section class="lesson__video"> 
        <div class="video">
            <div class="relative">
                <VideoController></VideoController>
            </div>
        </div>
        </section>`

        // return `<section class="lesson__video"> 
        //     <div class="video">
        //         <div class="relative">
        //             <video  >
        //                 <source  />
        //             </video>
        //             <div class="mask"></div>
        //         </div>
        //     </div>
        //     </section>`
    }
}

export default VideoComponet;