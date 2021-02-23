import React, { useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Input, Button } from "antd";
import logo from "./mobius-logo.png";

function App() {
  const [wordOne, setWordOne] = useState("");
  const [wordTwo, setWordTwo] = useState("");

  function mountDict(word) {
    let wordDict = {};
    for (let letter of word) {
      if (Object.keys(wordDict).includes(letter)) {
        wordDict[letter]++;
      } else {
        wordDict[letter] = 1;
      }
    }
    return wordDict;
  }

  function checkAnagram(word1, word2) {
    let word1Dict = mountDict(word1);
    let word2Dict = mountDict(word2);

    for (let char in word1Dict) {
      if (word1Dict[char] !== word2Dict[char]) {
        return false;
      }
    }
    return true;
  }

  function handleButton() {
    if (wordOne.length !== wordTwo.length) {
      console.log(false);
      return;
    }
    console.log(checkAnagram(wordOne, wordTwo));
  }

  function handleReset() {
    setWordOne("");
    setWordTwo("");
  }

  return (
    <>
      <div className="Logo-header">
        <img alt="logo" src={logo} />
      </div>
      <div className="App-header">
        <span>First word:</span>
        <Input value={wordOne} onChange={(e) => setWordOne(e.target.value)} />
        <span>Second word:</span>
        <Input value={wordTwo} onChange={(e) => setWordTwo(e.target.value)} />
        <Button type="primary" shape="round" onClick={handleButton}>
          Check
        </Button>
        <Button type="danger" shape="round" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </>
  );
}

export default App;
