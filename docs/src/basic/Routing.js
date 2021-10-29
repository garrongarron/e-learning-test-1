import cache from "./Cache.js"
import eventBus from "./EventBus.js"
import routes from "../pages/routes.js"

class Routing {
    constructor() {
        eventBus.subscribe('routing', this.goto)
        this.prev = null
        this.cache = {}
        window.cache = this.cache
    }
    closePage = (component) => {
        cache.appendChild(component.node)
    }
    goto = (route) => {
        if (routes[route] instanceof Promise) {
            routes[route].then(Module => {
                this.cache[route] = (typeof this.cache[route] == 'undefined') ? new Module() : this.cache[route]
                this.redirect(route)
            })
        } else {
            this.goto('/')
            console.error('no page');
        }
    }
    getNode = (route) => {
        if (this.cache[route] && this.cache[route].node) {
            return this.cache[route].node
        }
        return this.cache[route].exec()
    }
    redirect = (route) => {
        let node = this.getNode(route)
        let base = document.head.querySelector('base')
        if (base) cache.appendChild(base)
        history.pushState({ page: route }, null, route)
        if (base) document.head.appendChild(base)
        if (this.prev) this.closePage(this.prev)
        document.body.innerHTML = ''
        document.body.appendChild(node)
        this.prev = this.cache[route]
        //
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    restore = (route) => {
        if (this.prev) this.closePage(this.prev)
        let node = this.getNode(route)
        document.body.appendChild(node)
        this.prev = this.cache[route]
    }
    start() {
        this.goto(location.pathname)
        window.addEventListener('popstate', this.onpopstate)
    }
    onpopstate = (e) => {
        if (!e.state) return
        this.restore(e.state.page)
    }
}



export default Routing