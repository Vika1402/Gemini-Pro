import "./Main.css";
import { assets } from "../../assets/assets";
const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini-Pro</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, vikas</span>
          </p>
          <p>How Can I Help You Today ? </p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Who is the prime minister of india </p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Who is the prime minister of india </p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Who is the prime minister of india </p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Who is the prime minister of india </p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here " />
            <div>
            <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
       
          </div>
          <p className="Bottom-info">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed sit quibusdam magnam tempore veniam officia doloribus sint.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
