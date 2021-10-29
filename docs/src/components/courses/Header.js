import Component from "../../../js/Component.js";
import eventBus from "../../basic/EventBus.js";
import searcher from "../../searcher/Searcher.js";
import Searcher from "../searcher/Searcher.js";

class Header extends Component {
    setChildComponent() { return [Searcher]; }
    addEventListener() { return ['click', 'keyup'] }
    beforeAppendChild(parent) {
        this.prevValue = ''
        this.input = parent.querySelector('input')
        this.input.addEventListener('keyup', this.search)
        searcher.loadDatabase().then(() => {
            let word = localStorage.getItem('word') || null
            if(!word) return false
            this.input.value = word;
            searcher.search(word)
        })
        searcher.setCallback((data) => {
            data.sort(function (a, b) {
                return b.interactionCount - a.interactionCount
            })
            eventBus.dispatch('search-result', data)
        })
        eventBus.subscribe('to-seach', (e)=>{
            localStorage.setItem('word', e.target.value)
            this.input.value = e.target.value;
            // searcher.search(data)
            searcher.eventHander(e)
        })
    }
    search = (e) => {
        console.log(this.prevValue, e.target.value);
        if(this.prevValue == e.target.value) return;
        this.prevValue = e.target.value
        localStorage.setItem('word', e.target.value)
        searcher.eventHander(e)
    }
    home() {
        eventBus.dispatch('routing', '/')
    }
    template({ }) {
        return `<header class="search__header" >
        <nav>
            <div class="search-bar">

                <div class="navbar__header__logolink" click="home">
                    THREE.JS        
                        <!-- <img src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://file-uploads.teachablecdn.com/2600edf1805047aba6aa2a4c7a30f9f1/4a63254abacb45f3b284a47af8b71257"
                            alt="Alva Majo's School"
                            srcset="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:120/https://file-uploads.teachablecdn.com/2600edf1805047aba6aa2a4c7a30f9f1/4a63254abacb45f3b284a47af8b71257 2x"> -->
                            
                </div>
                <Searcher ></Searcher>
            </div>
        </nav>
    </header>`
    }
}

//let content = new Header();
//content.querySelector('.Header')
export default Header;