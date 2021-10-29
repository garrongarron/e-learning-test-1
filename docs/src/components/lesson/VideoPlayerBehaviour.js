class VideoPlayerBehaviour {
    constructor() {
        this.controller = null
        this.video = null
    }
    watch() {
        let watchMe = new IntersectionObserver(
            (data) => {
                // let isSmall = !!this.controller.parentNode.classList.contains('pictureToPictureSmall')
                if (!data[0].isIntersecting && this.video.readyState == 4) {
                    // if (!isSmall) 
                    this.videoSmall()
                } else {
                    this.videoRestoreFromSmall()
                }
            },
            {
                threshold: [0.7]
            }
        );
        if (!this.controller.parentNode.parentNode) return
        watchMe.observe(this.controller.parentNode.parentNode);
    }
    toggle = () => {
        (!this.video.paused) ? this.video.pause() : this.video.play();
    }
    start(controller) {
        this.controller = controller;
        this.controllerFadeInSystem()
        this.video = document.querySelector('video')
        this.video.removeEventListener('click', this.toggle)
        this.video.addEventListener('click', this.toggle)
        
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
        //picture to picture
        this.pictureToPicture = this.controller.querySelector('.pictureToPicture')
        this.pictureToPictureToggle()
        this.watch()

        //picture to picture
        this.volume = this.controller.querySelector('.volume-bar')
        this.volumeBar = this.controller.querySelector('.volume-bar .bar')
        this.volumeValue = this.controller.querySelector('.volume-bar .value')
        this.volumeCursor = this.controller.querySelector('.volume-bar .cursor')
        this.volumeProcess()
    }
    volumeUpdate = (e) => {
        if (!this.mouseDown) return
        let ratio = e.offsetX / this.volume.getBoundingClientRect().width
        this.volumeCursor.style.left = Math.round(ratio * 100) + '%';
        this.volumeValue.style.width = Math.round(ratio * 100) + '%'
        this.video.volume = ratio * ratio
        localStorage.setItem('volume', JSON.stringify(this.video.volume))
    }
    firsVolumeValue() {
        let volume = JSON.parse(localStorage.getItem('volume'))
        this.video.volume = volume
        this.volumeCursor.style.left = Math.round(volume ** .5 * 100) + '%';
        this.volumeValue.style.width = Math.round(volume ** .5 * 100) + '%'
    }
    volumeProcess() {
        this.firsVolumeValue()
        this.mouseDown = false
        this.timeline.addEventListener('mouseout', () => { this.mouseDown = false })
        document.addEventListener('mouseup', (e) => { this.mouseDown = false })
        this.volume.addEventListener('mousedown', (e) => {
            this.mouseDown = true;
            this.volumeUpdate(e)
        })
        this.volume.addEventListener('mousemove', this.volumeUpdate)
    }
    pictureToPictureToggle = () => {
        this.pictureToPicture.addEventListener('click', this.pictureToPictureSystem)
    }
    fixVideo = (player) => {
        let data = this.video.getBoundingClientRect()
        //container

        player.parentNode.style.height = data.height + 'px'
        //player
        player.style.position = 'fixed'
        player.style.width = data.width + 'px'
        player.style.height = data.height + 'px'
        player.style.transition = 'all .5s';
    }
    unfixVIdeo = (player) => {
        player.style.position = 'relative'
        player.style.transition = 'none';
    }
    videoSmall = () => {
        this.controller.parentNode.getBoundingClientRect()
        this.fixVideo(this.controller.parentNode)
        setTimeout(() => {
            this.controller.parentNode.classList.add('pictureToPictureSmall')
        }, 15)
        setTimeout(() => {
            this.controller.parentNode.style.width = null
            this.controller.parentNode.style.height = 'auto'
        }, 500);
        this.pictureToPicture.classList.remove('pictureToPicture')
        this.pictureToPicture.classList.add('exitminiature')
    }
    videoRestoreFromSmall = () => {
        this.unfixVIdeo(this.controller.parentNode)
        this.controller.parentNode.classList.remove('pictureToPictureSmall')
        this.pictureToPicture.classList.add('pictureToPicture')
        this.pictureToPicture.classList.remove('exitminiature')
        if (!this.controller.parentNode.parentNode) return
        this.controller.parentNode.parentNode.style.height = null
    }
    pictureToPictureSystem = () => {
        if (!this.controller.parentNode.classList.contains('pictureToPictureSmall')) {
            this.videoSmall()
        } else {
            this.videoRestoreFromSmall()
        }
    }
    timelineMousePosition() {
        let mouseDown = false
        let _seconds = 0
        this.timeline.addEventListener('mouseover', () => {
            this.controller.querySelectorAll('.timeline-bar  .display').forEach(display => {
                display.classList.add('fadeIn')
            })
        })
        this.timeline.addEventListener('mouseout', () => {
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
            this.cursorPosition.innerHTML = minutes + ':' + seconds
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
            }, 3000);
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