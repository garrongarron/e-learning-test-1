import Component from "../../../js/Component.js";
import eventBus from "../basic/EventBus.js";
import cssLoader from "../basic/CssLoader.js";
import Header from "../components/landing/Header.js";
import Main from "../components/landing/Main.js";
import Footer from "../components/landing/Footer.js";
import init from "../tools/auth/index.js";

class Landing extends Component {
    setChildComponent() { return [Header, Main, Footer]; }
    beforeAppendChild() {
        setTimeout(() => {
            document.head.querySelector('title').innerHTML = 'Aprende Javascript'
        },1)
        let folder = 'src/components/landing/css/'
        let cssList = [
            'block__banner.css',
            'block__wordcloud.css',
            'block__column.css',
            'block__curriculum.css',
            'block__email_leads.css',
            'block__featured-products.css',
            'block__image-with-text.css',
            'block__pricing.css',
            'block__text.css',
            'footer.css',
            'header.css',
        ];
        cssLoader.load(folder, cssList)
        // init()
        this.done = false
    }
    // addEventListener() { return ['click'] }
    doSomething(e) {
        eventBus.dispatch('routing', '/curso.html')
    }
    template({ }) {
        return `<div click="doSomething"> 
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
            </div>`
    }
}

//let content = new Landing();
//content.querySelector('.Landing')
export default Landing;