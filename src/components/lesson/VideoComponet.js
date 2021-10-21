import Component from "../../../js/Component.js";
import videoProvider from "../../VideoProvider.js";
import videoResizing from "./VideoResizing.js";

class VideoComponet extends Component {

    beforeAppendChild(parent) {
        let section = parent.children[0];
        let div = section.children[0];
        let video = div.children[0];
        videoProvider.getUrl('Rtqvnl02Zcs').then(url => {
            video.src = url[0].url
            console.log(video.src);
            video.pause()
            setTimeout(() => {
                video.removeAttribute('src')
            }, 100);
            videoResizing(section, div, video)
        })

        let watchMe = new IntersectionObserver(
            function (data) {
                if (!data[0].isIntersecting && video.readyState == 4) {
                    // div.style.transition = 'all 0.8s'
                    div.classList.add('miniature')
                } else {
                    div.classList.remove('miniature')
                }
            },
            {
                threshold: [0.7]
            }
        );
        watchMe.observe(section);
    }
    template({ }) {
        return `<section class="lesson__video"> 
            <div class="video">
                <video autoplay="false" controls="false">
                    <source  />
                </video>
            </div>
            </section>`
    }
}

export default VideoComponet;