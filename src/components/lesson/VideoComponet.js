import Component from "../../../js/Component.js";
import videoProvider from "../../VideoProvider.js";

class VideoComponet extends Component {

    beforeAppendChild(parent) {
        let section = parent.children[0];
        let div = section.children[0];
        let video = div.children[0];
        videoProvider.getUrl('iqJIgrqqH1I').then(url=>{
            console.log(url[0].url);
            video.src = url[0].url
            
            video.onloadstart = () => {
                setTimeout(() => {
                    let data = div.getBoundingClientRect()
                    div.style.width = data.width + 'px'
                    div.style.height = data.height + 'px'
                    section.style.width = data.width + 'px'
                    section.style.height = data.height + 'px'
                    video.addEventListener('resize', () =>{
                        let data = div.getBoundingClientRect()
                        div.style.width = data.width + 'px'
                        div.style.height = data.height + 'px'
                        section.style.width = data.width + 'px'
                        section.style.height = data.height + 'px'
                    })
                    
                }, 3500);
            }
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
                    <source src="#" />
                </video>
            </div>
            </section>`
    }
}

export default VideoComponet;