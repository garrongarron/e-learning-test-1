import Component from "../../../js/Component.js";

class BlockFeatured extends Component {
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
        return `<section class="block__featured-products">
        <h5>Example Featured Products</h5>
        <p>Showcase other available courses, bundles, and coaching products you’re selling with the Featured Products
            block to provide alternatives to visitors who may not be interested in this specific product.</p>
        <button>Example</button>
        <ul>
            <li>
                <div class="image"></div>
                <div class="container">
                    <h6>Course title</h6>
                    <span>Description</span>
                    <div class="bottom">
                        <div class="avatar"></div>
                        <div class="author">Mc Fly</div>
                        <div class="price">$543.21</div>
                    </div>
                </div>
            </li>
            <li>
                <div class="image"></div>
                <div class="container">
                    <h6>Course title</h6>
                    <span>Description</span>
                    <div class="bottom">
                        <div class="avatar"></div>
                        <div class="author">Mc Fly</div>
                        <div class="price">$543.21</div>
                    </div>
                </div>
            </li>
            <li>
                <div class="image"></div>
                <div class="container">
                    <h6>Course title</h6>
                    <span>Description</span>
                    <div class="bottom">
                        <div class="avatar"></div>
                        <div class="author">Mc Fly</div>
                        <div class="price">$543.21</div>
                    </div>
                </div>
            </li>
        </ul>

        <input type="button" value="View all products"></button>
    </section>`
    }
}

//let content = new BlockFeatured();
//content.querySelector('.BlockFeatured')
export default BlockFeatured;