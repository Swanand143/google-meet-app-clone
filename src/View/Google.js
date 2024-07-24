import "./Google.css";
import MicOn from "./icons/mic.png";
import Video from "./icons/videocam.png";
import Caption from "./icons/closed.png";
import Emoji from "./icons/mood.png";
import Hand from "./icons/hand.png";
import Present from "./icons/present_to_all.png";
import More from "./icons/more_vert.png";
import Endcall from "./icons/call_end.png";

import Info from "./icons/info.png";
import Group from "./icons/group.png";
import Chat from "./icons/chat.png";
import Category from "./icons/category.png";
import Host from "./icons/Lock.png";

const Google = () => {
  return (
    <>
    
      <div className="g-container">
        <div>3:12 PM | Abd-wxyz-qwert</div>
        <div className="main-bar">
          <div className="main-menu">
            <img src={MicOn} alt="icon" className="icons" />
            <img src={Video} alt="icon" className="icons" />
            <img src={Caption} alt="icon" className="icons" />
            <img src={Emoji} alt="icon" className="icons" />
            <img src={Present} alt="icon" className="icons" />
            <img src={Hand} alt="icon" className="icons" />
            <img src={More} alt="icon" className="icons" />
            <img src={Endcall} alt="icon" className="icons" />
          </div>
        </div>
        <div className="right-menu">
          <img src={Info} alt="icon" className="icons" />
          <img src={Group} alt="icon" className="icons" />
          <img src={Chat} alt="icon" className="icons" />
          <img src={Category} alt="icon" className="icons" />
          <img src={Host} alt="icon" className="icons" />
        </div>
      </div>
    </>
  );
};

export default Google;
