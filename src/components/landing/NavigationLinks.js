import Component from "../../../js/Component.js";

class NavigationLinks extends Component {
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
    <ul class="navbar__menu__list menu" id="hamburger-menu" role="menu" aria-describedby="hamburger"
        tabindex="0" aria-hidden="false">

        <li>

            <a href="/courses/enrolled" target="">
                My Products
            </a>

        </li>

        <li>

            <a href="/courses" target="">
                All Products
            </a>

        </li>


        <!-- If more than 5 links, collapse the rest in a dropdown -->


        <!-- User Menu -->
        <li>
            <button class="menu-trigger" onclick="toggleMenu('user-menu')">
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