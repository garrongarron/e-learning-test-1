import './pages.js'

let lazy = async (filename) => {
    let module = await import(`../pages/${filename}`)
    return module.default
}

const handler = {
    get: function(obj, prop) {
        return obj[prop] ? lazy(obj[prop]) : null;
    }
}
const routes = new Proxy(global.routeList, handler);


export default routes;