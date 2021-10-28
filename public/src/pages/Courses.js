import Component from "../../../js/Component.js";
import cssLoader from "../basic/CssLoader.js";
import Header from "../components/courses/Header.js";
import Main from "../components/courses/Main.js";

class Courses extends Component {
    setChildComponent() { return [Header /*, Aside*/, Main]; }
    beforeAppendChild() {
        setTimeout(() => {
            document.head.querySelector('title').innerHTML = 'Cursos'
        }, 10);
        this.done = false
        let folder = 'src/components/courses/css/'
        let cssList = [
            'courses__header.css',
            'courses__result.css',
        ];
        cssLoader.load(folder, cssList)
    }
    addEventListener() { return ['click'] }
    doSomething(e) {
        // eventBus.dispatch('routing', '/index.html')
    }
    template({ }) {
        return `<div click="doSomething"> 
        <Header></Header>
        <Main></Main>
        <!-- <Footer></Footer> -->
        </div>`
    }
}

export default Courses;