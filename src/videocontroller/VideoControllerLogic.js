let toggle 
document.addEventListener('fullscreenchange', (event) => {
    if (document.fullscreenElement) {
        toggle.classList.remove('fullscreen')
        toggle.classList.add('minimizefullscreen')
    } else {
        toggle.classList.add('fullscreen')
        toggle.classList.remove('minimizefullscreen')
    }
});

document.addEventListener('click', function (event) {
    if (!event.target.matches('.fullscreen')&&!event.target.matches('.minimizefullscreen')) return;
    if(!toggle) toggle = document.querySelector('.fullscreen')
    event.preventDefault();

    const fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    if (fullscreenElement) {
        exitFullscreen();

    } else {
        launchIntoFullscreen(document.querySelector('.video-container'));
    }
});

function launchIntoFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else {
        element.classList.toggle('fullscreen');
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}


class VideoControllerLogic {

    formater(time) {
        let minutes = ~~(time / 60)
        let seconds = Math.round(time) % 60
        seconds = (seconds < 10) ? '0' + seconds : seconds
        return minutes + ':' + seconds
    }
    togglePictureInPicture = () => {
        if (document.pictureInPictureElement) {
            document.exitPictureInPicture();
        } else {
            if (document.pictureInPictureEnabled) {
                document.querySelector("video").requestPictureInPicture();
            }
        }
    }
    logic = () => {
        let video = document.querySelector("video");
        let cursor1 = document.querySelector(".cursor1");
        let value = document.querySelector('.timeline-bar .value')
        let cursor = document.querySelector('.timeline-bar .cursor')
        let timeline = document.querySelector('.timeline-bar')
        let current = document.querySelector('.timeline-bar .current')
        let play = document.querySelector('.video-controller .play')
        let miniature = document.querySelector('.video-controller .miniature')
        let controller = document.querySelector('.video-controller')
        
        setTimeout(() => {
            console.log(controller);
            controller.classList.add('fadeIn')
        }, 1000);

        controller.addEventListener('mouseover',()=>{
            controller.classList.add('fadeIn')
        })
        let m = 0
        controller.addEventListener('mouseout',()=>{
            clearTimeout(m)
            m = setTimeout(() => {
                controller.classList.remove('fadeIn')
            }, 3000);
        })
        

        video.addEventListener('playing', () => {
            play.classList.remove('play')
            play.classList.add('pause')
        })
        video.addEventListener('play', () => {
            play.classList.remove('play')
            play.classList.add('pause')
        })
        video.addEventListener('pause', () => {
            play.classList.add('play')
            play.classList.remove('pause')
        })
        miniature.addEventListener("click", this.togglePictureInPicture)
        play.addEventListener("click", () => {
            if (video.paused) {
                video.play()
            } else {
                video.pause()
            }
        })

        let _seconds = 0
        let over = false
        let ratio = 0
        let minutes = 0
        let seconds = 0
        let mouseDown = false
        let n = 0
        let updateTime = () => {
            cursor1.innerHTML = this.formater(video.currentTime)
            let percentage = video.currentTime / video.duration
            percentage = (percentage * 100).toFixed(2)
            value.style.width = percentage + '%'
            cursor.style.left = percentage + '%'
            cursor1.style.left = percentage + '%'
        }
        setInterval(updateTime, 1000);
        timeline.addEventListener('mousedown', (e) => {
            mouseDown = true
            updatePosition()
        })
        timeline.addEventListener('mouseup', (e) => { mouseDown = false })


        timeline.addEventListener('mouseout', (e) => {
            over = false
            mouseDown = false
            document.querySelectorAll('.timeline-bar  .display').forEach(display => {
                display.classList.remove('fadeIn')
            })
        })
        timeline.addEventListener('mouseover', (e) => {
            over = true;
            document.querySelectorAll('.timeline-bar  .display').forEach(display => {
                display.classList.add('fadeIn')
            })
        })
        timeline.addEventListener('mousemove', (e) => {
            if (over) {
                let cursor = document.querySelector('.timeline-bar .bar')
                ratio = e.offsetX / cursor.getBoundingClientRect().width
                _seconds = Math.round(video.duration * ratio)
                minutes = ~~(_seconds / 60)
                seconds = (_seconds % 60)
                // console.log(_seconds, e.offsetX, minutes, seconds);
                current.style.left = Math.round(ratio * 100) + '%'
                current.innerHTML = minutes + ':' + seconds
                if (mouseDown) {
                    updatePosition()
                }
            }
        })
        let updatePosition = () => {
            video.currentTime = _seconds
            updateTime()
        }

    }
}

const videoControllerLogic = new VideoControllerLogic()

export default videoControllerLogic