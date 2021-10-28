import Component from "../../../js/Component.js";
import NavigationLinks from "./NavigationLinks.js";

class Header extends Component {
    setChildComponent() { return [NavigationLinks]; }
    template({ }) {
        return `
        <header id="header" class="header header-sticky">
            <!-- Navbar -->
            <nav class="navbar is-not-signed-in navbar-course-hero at-top" id="navbar" role="navigation">
                <div class="navbar__header">
                    <!-- Site logo -->

                    <a class="navbar__header__logolink" href="javascript:;">
                        THREE.JS
                        <!-- <img src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://file-uploads.teachablecdn.com/2600edf1805047aba6aa2a4c7a30f9f1/4a63254abacb45f3b284a47af8b71257"
                            alt="Alva Majo's School"
                            srcset="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:120/https://file-uploads.teachablecdn.com/2600edf1805047aba6aa2a4c7a30f9f1/4a63254abacb45f3b284a47af8b71257 2x"> -->
                    </a>

                    <!-- Header Menu -->
                    <div class="navbar__menu">
                        <button for="f-toggle" tabindex="0" role="button" id="hamburger" class="hamburger"
                            aria-label="Toggle navigation" onclick="toggleMenu('hamburger-menu')">
                            <span></span>
                        </button>
                        <NavigationLinks></NavigationLinks>

                    </div>
                </div>
            </nav>
        </header>`
    }
}

export default Header;