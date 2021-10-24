import Component from "../../../js/Component.js";
import cache from "../../basic/Cache.js";
import eventBus from "../../basic/EventBus.js";
import videoProvider from "../../VideoProvider.js";
import currentTimeManager from "./CurrentTimeManager.js";
import spinner from "./Spinner.js";
import VideoPlayerController from "./VideoPlayerController.js";

class VideoPlayer extends Component {
  setState() {
    eventBus.subscribe('loadVideo', (video) => {
      if (!video) return console.error("Video null", video)
      this.done = false
      let node = document.querySelector('video')
      if (node) node.pause()
      localStorage.setItem('latestVideo', video)
      this.setNewState({ video })
      this.node.parentNode.style = ''
      this.node.appendChild(spinner)
    })
    return {
      video: localStorage.getItem('latestVideo') || 'rr2H086z16s'
    }
  }
  setChildComponent() { return [VideoPlayerController]; }
  memoryPosition = () => {
    try {
      currentTimeManager.setCurrentTime(this.state.video, this.node.children[0].currentTime)
    } catch (error) { }
  }
  beforeAppendChild(parent) {
    parent.children[0].addEventListener("contextmenu", e => e.preventDefault());
    let video = parent.querySelector('video')
    videoProvider.getUrl(this.state.video).then(url => {
      video.src = url[1].url
    })
    //todo start
    parent.children[0].appendChild(spinner)
    video.style.display = 'none'
    video.addEventListener('loadeddata', () => {
      video.style.display = 'block'
      video.removeAttribute('src')
      cache.appendChild(spinner)
      video.currentTime = currentTimeManager.getCurrentTime(this.state.video)
      setInterval(() => {
        this.memoryPosition()
      }, 1000);
    })
  }
  template({ }) {
    return `
    <div class="lesson__videoplayer">
      <video preload="auto">
        <source type="video/mp4" />
      </video>
      <VideoPlayerController></VideoPlayerController>
    </div>`
  }
}

//let content = new VideoPlayer();
//content.querySelector('.VideoPlayer')
export default VideoPlayer;