import Component from "../../../js/Component.js";
import eventBus from "../../basic/EventBus.js";
import BlocText from "../landing/BlocText.js";
import Message from "./Message.js";
import Quiz from "./Quiz.js";
import VideoPlayer from "./VideoPlayer.js";

class Main extends Component {
    beforeAppendChild(parent){
        let title = parent.querySelector('h1')
        eventBus.subscribe('nextPrevVideo', ({ videos, id }) => {
            videos.forEach(v =>{
                if (v.videoId == id) {
                    title.innerHTML = v.title
                }
            })
            
        })
    }
    setChildComponent() { return [VideoPlayer, Quiz, Message]; }
    template({ }) {
        return `
    <main class="lesson__main">
        <div class="title">
            <svg width="24" height="24">
                <path
                    d="M21 3H3C1.89 3 1 3.89 1 5V17C1 18.1 1.89 19 3 19H8V21H16V19H21C22.1 19 22.99 18.1 22.99 17L23 5C23 3.89 22.1 3 21 3ZM21 17H3V5H21V17ZM16 11L9 15V7L16 11Z"
                    fill="currentColor"></path>
            </svg>
            <h1>Title</h1>
        </div>
        <div class="lesson__video__container">
            <VideoPlayer></VideoPlayer>
        </div>
        <Quiz></Quiz>
        <Message></Message>
    </main>`
    }
}

export default Main;