class VideoPlayerBehaviour {
    constructor() {
        this.controller = null
        this.video = null
    }
    start(controller) {
        this.controller = controller;
        this.controllerFadeInSystem()
        this.video = document.querySelector('video')
        //play pause
        this.playToggleBtn = this.controller.querySelector('.play')
        this.playIconSystem(this.playToggleBtn)
        this.playToggleBtn.addEventListener('click', this.playToggle)
        //fullscreen
        this.fullscreenBtn = this.controller.querySelector('.fullscreen')
        this.fullScreenIconSystem()
        this.fullscreenBtn.addEventListener('click', this.fullScreenToggle)
        //currentTime
        setInterval(() => {
            this.processCurrentTime()
        }, 1000);
        this.currentTimeBar = this.controller.querySelector('.timeline-bar .value')
        this.cursor = this.controller.querySelector('.timeline-bar .cursor')
        this.cursorPosition = this.controller.querySelector('.timeline-bar .cursor1')
        this.current = this.controller.querySelector('.timeline-bar .current')
        this.processCurrentTime()
        //mouseposition
        this.timeline = this.controller.querySelector('.timeline-bar')
        this.timelineMousePosition()

    }
    timelineMousePosition() {
        let mouseDown = false
        let _seconds = 0
        this.timeline.addEventListener('mouseover',()=>{
            this.controller.querySelectorAll('.timeline-bar  .display').forEach(display => {
                display.classList.add('fadeIn')
            })
        })
        this.timeline.addEventListener('mouseout',()=>{
            this.controller.querySelectorAll('.timeline-bar  .display').forEach(display => {
                display.classList.remove('fadeIn')
            })
        })
        this.timeline.addEventListener('mouseup', (e) => { mouseDown = false })
        this.timeline.addEventListener('mousedown', (e) => { 
            mouseDown = true 
            this.video.currentTime = _seconds
            this.processCurrentTime()
        })
        this.timeline.addEventListener('mousemove', (e) => {
            let ratio = e.offsetX / this.timeline.getBoundingClientRect().width
            this.cursorPosition.style.left = Math.round(ratio * 100) + '%'
            _seconds = Math.round(this.video.duration * ratio)
            let minutes = ~~(_seconds / 60)
            let seconds = (_seconds % 60)
            seconds = (seconds < 10) ? '0' + seconds : seconds
            this.cursorPosition.innerHTML =  minutes + ':' + seconds
            if (mouseDown) {
                this.video.currentTime = _seconds
                this.processCurrentTime()
            }
        })

    }
    processCurrentTime = () => {
        let percentage = this.video.currentTime / this.video.duration
        percentage = (percentage * 100).toFixed(2)
        this.currentTimeBar.style.width = percentage + '%'
        this.cursor.style.left = percentage + '%'
        this.current.style.left = percentage + '%'
        this.current.innerHTML = this.formater(this.video.currentTime)

    }
    formater(time) {
        let minutes = ~~(time / 60)
        let seconds = Math.round(time) % 60
        seconds = (seconds < 10) ? '0' + seconds : seconds
        return minutes + ':' + seconds
    }
    controllerFadeInSystem() {
        this.controller.classList.add('fadeIn')
        let mouseover = false
        this.controller.addEventListener('mouseover', () => {
            this.controller.classList.add('fadeIn')
            mouseover = true
        })
        this.controller.addEventListener('mousemove', () => {
            if (mouseover) this.controller.classList.add('fadeIn')
        })
        let m = 0
        this.controller.addEventListener('mouseout', () => {
            clearTimeout(m)
            mouseover = false
            m = setTimeout(() => {
                this.controller.classList.remove('fadeIn')
            }, 5000);
        })
    }
    playIconSystem(play) {
        this.video.addEventListener('playing', () => {
            play.classList.remove('play')
            play.classList.add('pause')
        })
        this.video.addEventListener('play', () => {
            play.classList.remove('play')
            play.classList.add('pause')
        })
        this.video.addEventListener('pause', () => {
            play.classList.add('play')
            play.classList.remove('pause')
        })
    }
    playToggle = () => {
        console.log(this.video.paused);
        if (this.video.paused) {
            this.video.play()
        } else {
            this.video.pause()
        }
    }
    fullScreenIconSystem() {
        document.addEventListener('fullscreenchange', this.fullScreenIconSystemCallback);
    }
    fullScreenIconSystemCallback = (event) => {
        if (document.fullscreenElement) {
            this.fullscreenBtn.classList.remove('fullscreen')
            this.fullscreenBtn.classList.add('minimizefullscreen')
        } else {
            this.fullscreenBtn.classList.add('fullscreen')
            this.fullscreenBtn.classList.remove('minimizefullscreen')
        }
    }
    fullScreenToggle = () => {
        const fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
        if (fullscreenElement) {
            this.exitFullscreen();
        } else {
            this.launchIntoFullscreen(document.querySelector('.lesson__videoplayer'));
        }
    }
    launchIntoFullscreen = (element) => {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        } else {
            element.classList.toggle('fullscreen');//todo
        }
    }
    exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
    stop() { }
}

const videoPlayerBehaviour = new VideoPlayerBehaviour()

export default videoPlayerBehaviour