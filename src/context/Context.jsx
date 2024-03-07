import React, { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prePrompts, setPrePrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextword) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextword);
    }, 75 * index);
  };
  const newChat=()=>{
    setLoading(false);
    setShowResult(false);
  }

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;

    if (prompt !== undefined) {
      response = await runChat(prompt);
      setRecentPrompt(prompt);
    } else {
      setPrePrompts((prevPrePrompts) => [...prevPrePrompts, input]);
      setRecentPrompt(input);
      response = await runChat(input);
    }

    const responseArray = response.split("**");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      newResponse += i % 2 === 1 ? `<b>${responseArray[i]}</b>` : responseArray[i];
    }

    const newResponseArray = newResponse.split("*").join("<br/>").split(" ");
    newResponseArray.forEach((nextword, i) => {
      delayPara(i, `${nextword} `);
    });

    setLoading(false);
    setInput("");
  };

  const contextValue = {
    prePrompts,
    setPrePrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat
  };

  return <Context.Provider value={contextValue}>{props.children}</Context.Provider>;
};

export default ContextProvider;
