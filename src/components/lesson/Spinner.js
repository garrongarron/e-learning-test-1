import Component from "../../../js/Component.js";

class Spinner extends Component {
    template({}){
        return `<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`
    }
}
let spinner = new Spinner()
spinner = spinner.exec()
export default spinner;