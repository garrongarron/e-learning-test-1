import Component from "../../../js/Component.js";

class Banner1 extends Component {
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
        return `<section class="banner">
            <div class="banner__inner">
                <h1>Example Banner</h1>
                <p>Showcase your course or coaching, an announcement, or big feature. Use an eye-catching subheader to give your audience more context.</p>
                <button class="banner__button">Comprar el curso</button> 
            </div>
        </section>`
    }
}

//let content = new Banner1();
//content.querySelector('.Banner1')
export default Banner1;