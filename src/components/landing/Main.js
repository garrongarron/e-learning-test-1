import Component from "../../../js/Component.js";
import Banner1 from "./Banner1.js";
import BlockColumns from "./BlockColumns.js";
import BlockCurriculum from "./BlockCurriculum.js";
import BlockEmail from "./BlockEmail.js";
import BlockFeatured from "./BlockFeatured.js";
import BlockPricing from "./BlockPricing.js";
import BlocText from "./BlocText.js";
import BookImage from "./BookImage.js";

class Main extends Component {
	setChildComponent() { return [Banner1, BookImage, BlocText, BlockColumns, BlockCurriculum,
        BlockPricing, BlockFeatured, BlockEmail]; }

    reverse(){ return 'reverse'}
    template({}){
        return `<main>
            <Banner1></Banner1>
            <BookImage></BookImage>
            <BlocText></BlocText>
            <BlockColumns></BlockColumns>
            <BlockCurriculum></BlockCurriculum>
            <BlockPricing></BlockPricing>
            <BookImage reverse="reverse"></BookImage>
            <BlockFeatured></BlockFeatured>
            <BlockEmail></BlockEmail>
        </main>`
    }
}

export default Main;