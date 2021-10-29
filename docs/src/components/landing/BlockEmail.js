import Component from "../../../js/Component.js";

class BlockEmail extends Component {
    template({}){
        return `
    <section class="block__email_leads">
        <div class="container_500">
            <h5>Let’s keep in touch</h5>
            <p>Subscribe to the mailing list and receive the latest updates</p>
            <label for="email_leed">Email Address</label>
            <input type="text" id="email_leed">
            <div class="checkbox">
                <input type="checkbox">
                <span>By clicking this checkbox, you consent to receiving emails from this school or course</span>
            </div>
            <button>Subscribe</button>
            <span>We respect your privacy.</span>
        </div>
    </section>`
    }
}

export default BlockEmail;