import './App.css';
import PlayerButton from './PlayerButton';
import React, { useState, useEffect } from 'react';
import CompButton from './CompButton';
// import useLight from './hook/useLights';

function App() {
  const [isPlayerTurn, setIsPlayerTurn] = useState(false);
  const [computerPattern, setComputerPattern] = useState([]);
  const [playerPattern, setPlayerPattern] = useState([]);

  function randomColor() {
    let r = Math.floor(Math.random() * 4);
    let colors = ["red", "blue", "green", "yellow"];
    return colors[r]
  }

  function switchTurns() {
    setIsPlayerTurn((prevState) => {
      return !prevState;
    })
  }

  function increaseComputerPattern() {
    let newColor = randomColor();
    setComputerPattern((prevState) => {
      return [...prevState, newColor]
    })
  }

  function computerTakesTurn() {
    switchTurns();
    increaseComputerPattern();
  }

  useEffect(() => {
    console.log("game state:");
    let metaData = {
      playerTurn: isPlayerTurn,
      compPattern: computerPattern
    }
    console.log(metaData);
  })

  return (
    <div className="flexer">
      {isPlayerTurn ? (
          <>
            <PlayerButton color={"red"} />
            <PlayerButton color={"blue"} />
            <div className="scoreBoard"><span className="score"></span></div>
            <PlayerButton color={"green"} />
            <PlayerButton color={"yellow"} />
          </>
        ) : (
          <>
            <CompButton color={"red"} />
            <CompButton color={"blue"} />
            <div className="scoreBoard"><span className="score"></span></div>
            <CompButton color={"green"} />
            <CompButton color={"yellow"} />
          </>
        )
      }
      <button onClick={computerTakesTurn}>switch</button>
    </div>
  );
}

export default App;
