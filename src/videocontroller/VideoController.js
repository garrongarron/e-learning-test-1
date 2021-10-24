import Component from "../../../js/Component.js";
import videoControllerLogic from "./VideoControllerLogic.js";

class VideoController extends Component {
   
    beforeAppendChild() {
        setTimeout(videoControllerLogic.logic, 100);
    }
    template({ }) {
        return `
  <div class="video-container">
    <video>
      <source src="https://r10---sn-uxax4vopj55gb-x1xz.googlevideo.com/videoplayback?expire=1635054701&ei=DaB0YaqkAcv8xN8PyueP4A8&ip=3.249.253.153&id=o-AGcIdxrjDbBEUBMsVRBMqqYJafF723w9pMVGCWJFQGyu&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=pNzWvxjGuLkdIlFCsDDqjcQG&gir=yes&clen=9134114&ratebypass=yes&dur=286.696&lmt=1528146270542606&fexp=24001373,24007246&c=WEB_EMBEDDED_PLAYER&n=2yAtAEOlsi7ZOTX634i&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgIZSffuBOgV2iMK4EzTaX0MLiW9LvkBNGJ650RWSj-5ICICm3Sp_SdvxJr_OzoMNgjjPAmZEyCc8KvRZVjSubTp6P&redirect_counter=1&rm=sn-q0ce77l&req_id=1cfa0bb24904a3ee&cms_redirect=yes&ipbypass=yes&mh=6P&mip=2802:8010:9509:d100:209a:75ce:5ec2:f0fd&mm=31&mn=sn-uxax4vopj55gb-x1xz&ms=au&mt=1635032677&mv=m&mvi=10&pl=49&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgabGeto57lV6jo3bpb4gJ-PcJCXDsLtmRgw1QXXx2wokCIQD0_1yXG_ino6k7YGq6Cs4E4EOolh_mWzEpVoTWN6C2SQ%3D%3D" />
    </video>
    <div class="video-controller">
      <ul>
        <li class="play"></li>
        <li class="volume-max"></li>
        <li class="volume-bar">
          <div class="bar">
            <div class="value"></div>
            <div class="cursor"></div>
          </div>
        </li>
        <li class="timeline-bar">
          <div class="bar">
            <div class="value"></div>
            <div class="cursor"></div>
          </div>
          <div class="display current">12:34</div>
          <div class="display cursor1">12:12</div>
        </li>
        <li class="pictureToPicture"></li>
        <li class="fullscreen"></li>
      </ul>
    </div>
  </div>        
`
    }
}

// let content = new VideoController();
// content.querySelector('.video-container')

export default VideoController;