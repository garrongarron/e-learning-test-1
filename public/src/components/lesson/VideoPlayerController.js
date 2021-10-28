import Component from "../../../js/Component.js";
import videoPlayerBehaviour from "./VideoPlayerBehaviour.js";

class VideoPlayerController extends Component {
    beforeAppendChild(parent) {
        let controller = parent.children[0]
        setTimeout(()=>{
            videoPlayerBehaviour.start(controller)
        }, 100);
    }
    template({ }) {
        return `
        <div class="video-controller">
            <ul>
                <li class="play"></li>
                <li class="volume-max"></li>
                <li class="volume-bar">
                    <div class="bar">
                    <div class="value"></div>
                    <div class="cursor"></div>
                    </div>
                </li>
                <li class="timeline-bar">
                    <div class="bar">
                    <div class="value"></div>
                    <div class="cursor"></div>
                    </div>
                    <div class="display cursor1">12:12</div>
                    <div class="display current">12:34</div>
                </li>
                <li class="pictureToPicture"></li>
                <li class="fullscreen"></li>
            </ul>
        </div>`
    }
}

//let content = new VideoPlayerController();
//content.querySelector('.VideoPlayerController')
export default VideoPlayerController;