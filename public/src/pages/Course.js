import Component from "../../../js/Component.js";
import cssLoader from "../basic/CssLoader.js";
import eventBus from "../basic/EventBus.js";
import Main from "../components/lesson/Main.js";
import Aside from "../components/lesson/Aside.js";
import Header from "../components/lesson/Header.js";

class Course extends Component {
    setChildComponent() { return [Header, Aside, Main]; }
    beforeAppendChild() {
        setTimeout(() => {
            document.head.querySelector('title').innerHTML = 'Courses'
        },1)
        this.done = false
        let folder = 'src/components/lesson/css/'
        let cssList = [
            'lesson__message.css',
            'lesson__quiz.css',
            'lesson__video.css',
            'lesson__videoplayer.css',
            'lesson__header.css',
            'lesson__main.css',
            'lesson__aside.css',
            'lesson__loader.css',
        ];
        cssLoader.load(folder, cssList)
        cssLoader.load('src/videocontroller/', ['VideoController.css'])
    }
    template({ }) {
        return `<div>
            <Header></Header>
            <Aside></Aside>
            <Main></Main>
        </div>`
    }
}

//let content = new Courses();
//content.querySelector('.Courses')
export default Course;