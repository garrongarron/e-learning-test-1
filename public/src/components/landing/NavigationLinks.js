import Component from "../../../js/Component.js";
import eventBus from "../../basic/EventBus.js";
import Searcher from "../searcher/Searcher.js";

class NavigationLinks extends Component {
    setChildComponent() { return [Searcher]; }
    courses() {
        eventBus.dispatch('routing', '/cursos.html')
    }
    beforeAppendChild(parent) {
        this.state.displayMenu = false
        this.menu = parent.querySelector("#user-menu")
        this.menu.classList.add("hide")
        this.btnSearch = parent.querySelector('.btn-search')
        this.input = parent.querySelector('.searcher')
        this.btnSearch.addEventListener('click', this.goToResults)
        this.input.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.goToResults()
            } else {
                localStorage.setItem('word', this.input.value)
                eventBus.dispatch('to-seach', e)
            }
        })
    }
    goToResults = () => {
        eventBus.dispatch('routing', '/cursos.html')
    }
    addEventListener() { return ['click'] }
    doSomething(e) {
        console.log(this.state.displayMenu);
        this.state.displayMenu = !this.state.displayMenu
        let x = (!this.state.displayMenu) ? this.menu.classList.add("hide") : this.menu.classList.remove("hide")
    }
    template({ }) {
        return `
    <ul class="navbar__menu__list menu" id="hamburger-menu" role="menu" aria-describedby="hamburger" tabindex="0" aria-hidden="false">
        <li>
           <div class="auth"></div>
        </li>
        <!-- <li>
            <a href="javascript:;" target="" click="courses">
                Ver todos los cursos
            </a>
        </li> -->
        <li>
            <!-- <input type="text" placeholder="Buscar curso" class="searcher">
            <button class="btn-search">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 50 50"  style=" fill:#ffffff;">
                    <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                </svg>
            </button> -->
            <Searcher></Searcher>
        </li>
        <!-- <li>
            <a href="/courses/enrolled" target="">
                My Products
            </a>
        </li> -->
       


        <!-- If more than 5 links, collapse the rest in a dropdown -->


        <!-- User Menu -->
        <li style="display: none;">
            <button class="menu-trigger" click="doSomething">
                <img class="gravatar"
                    src="https://s.gravatar.com/avatar/9190e124a88d67ac95f930daa72a72ba?d=mm"
                    alt="tujuegoajuicio@gmail.com">
                <span class="navbar__current-user">Alva Majo<i class="caret"></i></span>
            </button>
            <ul id="user-menu" class="inner-menu menu hidden" tabindex="0" aria-hidden="true">

                <li class="user-profile">
                    <a href="/current_user/profile">
                        Edit Profile
                    </a>
                </li>
                <li>
                    <a href="/current_user/subscriptions">
                        Manage Subscriptions
                    </a>
                </li>
                <li>
                    <a href="/current_user/credit_card">
                        Add / Change Credit Card
                    </a>
                </li>
                <li>
                    <a href="/current_user/address">
                        Address
                    </a>
                </li>
                <li>
                    <a href="/current_user/contact">
                        Contact
                    </a>
                </li>
                <li class="user-signout">
                    <a href="/sign_out">
                        Log Out
                    </a>
                </li>
            </ul>

        </li>

    </ul>`
    }
}

//let content = new NavigationLinks();
//content.querySelector('.NavigationLinks')
export default NavigationLinks;
