import Component from "../../../js/Component.js";

class BlockColumns extends Component {
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
        return `<section class="block__column"> 
                <div class="block__column_container">
                    <div class="block__column_card">
                        <div class="block__column_image"></div>
                        <h3 class="block__column_title">Example Title</h3>
                        <p class="block__column_p">Use this block to showcase testimonials, features, categories, or more. Each column has its own individual text field. You can also leave the text blank to have it display nothing and just showcase an image.</p>
                    </div>
                    <div class="block__column_card">
                        <div class="block__column_image"></div>
                        <h3 class="block__column_title">Example Title</h3>
                        <p class="block__column_p">Use this block to showcase testimonials, features, categories, or more. Each column has its own individual text field. You can also leave the text blank to have it display nothing and just showcase an image.</p>
                    </div>
                    <div class="block__column_card">
                        <div class="block__column_image"></div>
                        <h3 class="block__column_title">Example Title</h3>
                        <p class="block__column_p">Use this block to showcase testimonials, features, categories, or more. Each column has its own individual text field. You can also leave the text blank to have it display nothing and just showcase an image.</p>
                    </div>
                </div>
            </section>`
    }
}

//let content = new BlockColumns();
//content.querySelector('.BlockColumns')
export default BlockColumns;    