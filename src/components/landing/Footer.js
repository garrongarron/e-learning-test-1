import Component from "../../../js/Component.js";

class Footer extends Component {
//	setState() { return { n: JSON.parse(localStorage.getItem('n')) || 0 } }
//	setChildComponent() { return [Header]; }
//	addEventListener() { return ['click'] }
//    doSomething(e) {
//		console.log('Event: ' + e )
//		this.state.n++
//		localStorage.setItem('n', JSON.stringify(this.state.n));
//		this.setNewState(this.state)
 //   }
    template({}){
        return `<footer class="footer">
        <div class="container_960">
            <ul>
                <li>© Alva Majo's School 2021</li>
                <li>
                    <ul>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li class="with">Teach Online with <span>Teach:able</span></li>
                    </ul>
                </li>
            </ul>
        </div>
    </footer>`
    }
}

export default Footer;