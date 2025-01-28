import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);//83. Do not do this
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(){//82.we want to change player after someone selcts the square
    setActivePlayer((curActivePlayer)=> curActivePlayer === 'X'?'O':'X');
    //curActivePlayer is autmoatically provided here as we learnt
    setGameTurns();//83. Do not do this as already have it in Gameboard , but we will comment Geamrboard logic as we dont know whcih
    //order its clicked to nake it availbel for Log component
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName ="Player 1" symbol="X" isActive={activePlayer==='X'}/>
          <Player initialName ="Player 2" symbol="O" isActive={activePlayer==='O'}/>
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
        </div>
        <Log/>
    </main>
  )
}

export default App
