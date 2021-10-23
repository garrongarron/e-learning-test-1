import Component from "../../../js/Component.js";
import videoControllerLogic from "./VideoControllerLogic.js";

class VideoController extends Component {
   
    beforeAppendChild() {
        setTimeout(videoControllerLogic.logic, 100);
    }
    template({ }) {
        return `
        <div class="video-controller">
          <ul>
            <li class="play"></li>
            <!-- <li class="pause"></li> -->
            <!-- <li class="volume-min"></li>
            <li class="volume-middle"></li> -->
            <li class="volume-max"></li>
            <!-- <li class="muted"></li> -->
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
                <div class="display current">12:34</div>
                <div class="display cursor1">12:12</div>
            </li>
            <li class="miniature"></li>
            <!-- <li class="exitminiature"></li> -->
            <li class="fullscreen"></li>
            <!-- <li class="minimizefullscreen"></li> -->
            
          </ul>
        </div>`
    }
}

let content = new VideoController();
content.querySelector('.video-container')

export default VideoController;