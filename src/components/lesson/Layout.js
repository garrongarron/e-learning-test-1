import Component from "../../../js/Component.js";
import Aside from "./Aside.js";
import Header from "./Header.js";
import Main from "./Main.js";

class Layout extends Component {
	setChildComponent() { return [Header, Aside, Main]; }
    template({}){
        return `<div class="layout">
            <Header></Header>
            <Aside></Aside>
            <Main></Main>
        </div>`
    }
}


export default Layout;