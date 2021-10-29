import Component from "../../../js/Component.js";

class BookImage extends Component {
    template({reverse }) {
        return `<section class="block__image-with-text"> 
            <div class="block__image-with-text__center ${(reverse)?reverse:''}">
                <div class="block__image-with-text__image"></div>
                <div class="block__image-with-text__text">
                    <h2>¿Por qué aprender Javascript?</h2>
                    <p> <b>JavaScript es uno de los lenguajes de programación más utilizados a nivel mundial</b>. Esto, ya de por sí, es una buena razón por la que aprender JavaScript. Pero es que, además, dentro de la dificultad que conlleva formarse en un lenguaje cuando no tienes una base detrás, está considerado uno de los más sencillos a la hora de comenzar en el mundo de la programación.</p>
                
                </div>
            </div>
            </section>`
    }
}

export default BookImage;