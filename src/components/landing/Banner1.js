import Component from "../../../js/Component.js";

class Banner1 extends Component {
    setState() {
        this.dataUrl = 'api/banner.json'
        return JSON.parse(localStorage.getItem(this.dataUrl) || '{}')
    }
    beforeAppendChild() {
        if (localStorage.getItem(this.dataUrl)) return;
        fetch(this.dataUrl).then(data => data.json()).then(data => {
            this.state = data
            localStorage.setItem(this.dataUrl, JSON.stringify(this.state));
            this.setNewState(data)
        })
    }
    addEventListener() { return ['click'] }
    doSomething(e) {
        console.log('Event: ' + e)

    }
    template({ }) {
        let { h1, p, button } = this.state;
        return `<section class="banner">
            <div class="banner__inner">
                <h1>${h1}</h1>
                <p>${p}</p>
                <button class="banner__button" click="doSomething">${button}</button> 
            </div>
        </section>`
    }
}

//let content = new Banner1();
//content.querySelector('.Banner1')
export default Banner1;