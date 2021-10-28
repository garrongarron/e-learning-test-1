import Component from "../../../js/Component.js";
import eventBus from "../../basic/EventBus.js";

class BlockColumns extends Component {
    setState() {
        return {
            image1: 'img/angular.png',
            image2: 'img/react.png',
            image3: 'img/vue.png'
        }
    }
    gotoList(e) {
        e.target.value = e.target.innerText
        localStorage.setItem('word', e.target.value)
        eventBus.dispatch('to-seach', e)
        eventBus.dispatch('routing', '/cursos.html')
    }
    addEventListener() { return ['click'] }
    template({ }) {
        return `<section class="block__column"> 
                <div class="block__column_container">
                    <div class="block__column_card" >
                        <div class="block__column_image" style="background-image: url(${this.state.image1})"></div>
                        <h3 class="block__column_title" click="gotoList">Angular</h3>
                        <p class="block__column_p">Aprenda una forma de crear aplicaciones con Angular y reutilice su código y sus habilidades para crear aplicaciones para cualquier objetivo de implementación. Para web, web móvil, móvil nativo y escritorio nativo.</p>
                    </div>
                    <div class="block__column_card">
                        <div class="block__column_image" style="background-image: url(${this.state.image2})"></div>
                        <h3 class="block__column_title" click="gotoList">React</h3>
                        <p class="block__column_p">React ha sido diseñado desde el principio para una adopción gradual, y puede usar tanto React como necesite. Ya sea que desee probar React, agregar algo de interactividad a una página HTML simple o iniciar una aplicación compleja con tecnología React.</p>
                    </div>
                    <div class="block__column_card">
                        <div class="block__column_image" style="background-image: url(${this.state.image3})"></div>
                        <h3 class="block__column_title" click="gotoList">Vue</h3>
                        <p class="block__column_p">Vue está diseñado desde cero para ser utilizado incrementalmente. La librería central está enfocada solo en la capa de visualización, y es fácil de utilizar e integrar con otras librerías o proyectos existentes.</p>
                    </div>
                </div>
            </section>`
    }
}

//let content = new BlockColumns();
//content.querySelector('.BlockColumns')
export default BlockColumns;