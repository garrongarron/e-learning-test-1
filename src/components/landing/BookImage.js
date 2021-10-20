import Component from "../../../js/Component.js";

class BookImage extends Component {
    template({reverse }) {
        return `<section class="block__image-with-text"> 
            <div class="block__image-with-text__center ${(reverse)?reverse:''}">
                <div class="block__image-with-text__image"></div>
                <div class="block__image-with-text__text">
                    <h2>Example Image with Text</h2>
                    <p> Use this Image with Text block to balance out your text 
                        content with a complementary visual to strengthen 
                        messaging and help your students connect with your product, 
                        course, or coaching. You can introduce yourself with a
                        profile picture and author bio, showcase a student 
                        testimonial with their smiling face, or highlight 
                        an experience with a screenshot.</p>
                </div>
            </div>
            </section>`
    }
}

export default BookImage;