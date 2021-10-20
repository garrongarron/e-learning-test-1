import Component from "../../../js/Component.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
import Main from "./Main.js";

class Layout extends Component {
	setChildComponent() { return [Header, Main, Footer]; }
    template({}){
        return `<div class="layout">
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>`
    }
}


export default Layout;