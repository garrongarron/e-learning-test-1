import Component from "../../../js/Component.js";
import Banner1 from "./Banner1.js";
import BlockColumns from "./BlockColumns.js";
import BlockCurriculum from "./BlockCurriculum.js";
import BlockEmail from "./BlockEmail.js";
import BlockFeatured from "./BlockFeatured.js";
import BlockPricing from "./BlockPricing.js";
import BlocText from "./BlocText.js";
import BookImage from "./BookImage.js";
import WordCloud from "./WordCloud.js";

class Main extends Component {
    setChildComponent() {
        return [Banner1, WordCloud, BookImage, BlocText,
            BlockColumns, BlockCurriculum, BlockPricing, BlockFeatured, BlockEmail];
    }

    reverse() { return 'reverse' }
    template({ }) {
        return `<main>
            <Banner1></Banner1>
            
            <!-- <BookImage></BookImage> -->
            <!-- <BlockPricing></BlockPricing> -->
            <BlockCurriculum></BlockCurriculum>
            <WordCloud></WordCloud>
            <!-- <BlocText></BlocText> -->
            <!-- <BlockColumns></BlockColumns> -->
            <!-- <BlockFeatured></BlockFeatured> -->
            <!-- <BookImage reverse="reverse"></BookImage> -->
            
            <!-- <BlockEmail></BlockEmail> -->
        </main>`
    }
}

export default Main;