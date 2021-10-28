import Component from "../../../js/Component.js";

class Spinner extends Component {
    template({}){
        return `
        <div style="min-height: 460px; width: 100%; background-color: #222; display:grid; place-items: center;">
            <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
        `
    }
}
let spinner = new Spinner()
spinner = spinner.exec()
export default spinner;