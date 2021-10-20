import Component from "../../../js/Component.js";

class Aside extends Component {

    template({}){
        return `
    <aside class="lesson__aside">
        <div class="card">
            <h2>3d Game Creations</h2>
            <div class="bar">
                <div class="quantity"></div>
            </div>
            <div class="desription">
                <span class="percentage">0</span>%
                <span>Complete</span>
            </div>
        </div>
    </aside>`
    }
}

export default Aside;