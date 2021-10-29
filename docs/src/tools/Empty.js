class Empty extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' })
    }
    setStyle(style) {
      const template = document.createElement('template');
      template.innerHTML = `<style>${style} </style>`
      this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    add(node) {
      this.shadowRoot.appendChild(node)
    }
  }
  
  window.customElements.define('comp-empty', Empty)
  export default Empty