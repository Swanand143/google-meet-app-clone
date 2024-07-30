import GCards from "../component/Google-Cards/g-card";
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
import home from "./img/home.jpg";
import billy from "./img/billy.avif";
import numen from "./img/numen.jpeg";
import fri from "./img/fri.avif";
import kimiko from "./img/kimiko.webp";
import star from "./img/star.jpg";
import hughi from "./img/hug.jpg";
import me from "./img/me.jpg";

const Google = () => {
  return (
    <>
      <div className="container">
        <GCards Name="Homelander" Image={home} />
        <GCards Name="William Butcher" Image={billy} />
        <GCards
          Name="Victoria Neuman"
          Image={numen}
        />
        <GCards
          Name="Frenchie"
          Image={fri}
        />
        <GCards
          Name="Kimiko"
          Image={kimiko}
        />
        <GCards
          Name="Starlight"
          Image={star}
        />
        <GCards
          Name="Hughie Campbell"
          Image={hughi}
        />
        <GCards
          Name="You"
          Image={me}
        />
      </div>
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
