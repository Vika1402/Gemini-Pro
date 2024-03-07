import React, { useState, useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import "./Main.css";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSent();
    }
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini-Pro</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
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
                <p>The market for virtual reality headsets in 2024: Meta dominates, Apple Vision Pro enters the market </p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Realistic vs. cartoon avatars – Which do users prefer? </p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Steps into new worlds: How Disney’s HoloTile is redefining the boundaries of virtual reality </p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-Title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              value={input}
              type="text"
              placeholder="Enter a prompt here "
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <p className="Bottom-info">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed sit
            quibusdam magnam tempore veniam officia doloribus sint.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
