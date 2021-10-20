import Component from "../../../js/Component.js";

class BlockCurriculum extends Component {
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
        return `
    <section class="block__curriculum">
        <div class="block__curriculum__710">
            <h4>Example title</h4>
            <p>!The curriculum block is dynamic. As you add curriculum to your course, you'll see it automatically
                populate here.</p>
            <span>Example</span>
            <div class="block__curriculum__section">
                <h5>Section Title</h5>
                <ul>
                    <li>
                        <span class="icon"></span>
                        <span class="description">Lesson #1</span>
                        <span class="button">Start</span>
                    </li>
                    <li>
                        <span class="icon"></span>
                        <span class="description">Lesson #1</span>
                        <span class="button">Start</span>
                    </li>
                    <li>
                        <span class="icon"></span>
                        <span class="description">Lesson #1</span>
                        <span class="button">Start</span>
                    </li>
                    <li>
                        <span class="icon"></span>
                        <span class="description">Lesson #1</span>
                        <span class="button">Start</span>
                    </li>
                    <li>
                        <span class="icon"></span>
                        <span class="description">Lesson #1</span>
                        <span class="button">Start</span>
                    </li>
                    <li>
                        <span class="icon"></span>
                        <span class="description">Lesson #1</span>
                        <span class="button">Start</span>
                    </li>

                </ul>
            </div>
        </div>
    </section>`
    }
}

//let content = new BlockCurriculum();
//content.querySelector('.BlockCurriculum')
export default BlockCurriculum;