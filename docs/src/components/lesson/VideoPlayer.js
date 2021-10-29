import Component from "../../../js/Component.js";
import cache from "../../basic/Cache.js";
import eventBus from "../../basic/EventBus.js";
import videoProvider from "../../VideoProvider.js";
import currentTimeManager from "./CurrentTimeManager.js";
import spinner from "./Spinner.js";
import VideoPlayerController from "./VideoPlayerController.js";

class VideoPlayer extends Component {
  static staticVideo = null;
  static positiontimer = 0
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
      if (!document.body.contains(this.video)) clearInterval(VideoPlayer.positiontimer)
      if (!this.video.currentTime) return
      currentTimeManager.setCurrentTime(this.state.video, this.video.currentTime)
    } catch (error) {
      console.log('error');
    }
  }
  ready = () => {
    this.video.style.display = 'block'
    if (document.body.contains(this.video)) {
      this.video.play()
    }
    this.video.removeAttribute('src')
    cache.appendChild(spinner)
    this.video.currentTime = currentTimeManager.getCurrentTime(this.state.video)
    VideoPlayer.positiontimer = setInterval(this.memoryPosition, 1000);
  }
  beforeAppendChild(parent) {
    parent.children[0].addEventListener("contextmenu", e => e.preventDefault());
    let video = parent.querySelector('video')
    if (!VideoPlayer.staticVideo) {
      VideoPlayer.staticVideo = video
      this.video = video
      this.video.addEventListener('loadeddata', this.ready)
    } else {
      clearInterval(VideoPlayer.positiontimer)
      let cachedVideo = VideoPlayer.staticVideo
      video.parentNode.replaceChild(cachedVideo, video)
      video.remove()
      video = cachedVideo
    }

    videoProvider.getUrl(this.state.video).then(url => {
      video.src = url[0].url
    })
    video.addEventListener('error ', this.error)
    
    // video.addEventListener('progress', function () {
    //   let h1 = document.createElement('h1')
    //   var range = 0;
    //   var bf = this.buffered;
    //   var time = this.currentTime;

    //   while (!(bf.start(range) <= time && time <= bf.end(range))) {
    //     range += 1;
    //   }
    //   var loadStartPercentage = bf.start(range) / this.duration;
    //   var loadEndPercentage = bf.end(range) / this.duration;
    //   var loadPercentage = loadEndPercentage - loadStartPercentage;
    //   console.log(loadPercentage);

    //   h1.innerHTML = loadPercentage+''
    // });
    //todo start
    parent.children[0].appendChild(spinner)
    video.style.display = 'none'
  }
  error = () => {
    localStorage.setItem('videos', "{}")
    videoProvider.getUrl(this.state.video).then(url => {
      video.src = url[0].url
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