import Component from "../../../js/Component.js";

class Message extends Component {
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
        return `<section class="lesson__message">
             <button>Discussion</button>
             <strong>Post a comment</strong>
             <div class="comment">
                <div class="left">
                    <div class="image"></div>
                    <div class="name">Instructor</div>
                </div>
                <div class="right">
                    <h4>Juan Perez</h4>
                    <textarea placeholder="Leave a comment..."ce></textarea>
                    <div class="upload">
                        <div class="icon"></div>
                    </div>
                    
                    <button>Post a comment</button>
                </div>
             </div>
             <strong>0 a comment</strong>
            </section>`
    }
}

//let content = new Message();
//content.querySelector('.Message')
export default Message;