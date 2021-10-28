import Component from "../../../js/Component.js";


class BlockPricing extends Component {
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
        return `<section class="block__pricing"> 
            <div class="block__pricing__text">Aprende comodamente</div>
        </section>`
    }
}

//let content = new BlockPricing();
//content.querySelector('.BlockPricing')
export default BlockPricing;