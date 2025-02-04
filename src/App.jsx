import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { act, useState } from "react";
import Log from "./components/Log";
import {WINNING_COMBINATIONS} from './winning-combinations.js';
import GameOver from "./components/GameOver.jsx";


const PLAYERS=  {
  X:'Player 1',
  O:'Player 2'
}

const INITIAL_GAME_BOARD = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

function derivedActivePlayer(gameTurns){//87. helper function that doesnt need any data or don eneed to be recreated when function executes
  let currentPlayer = 'X';//87.
  if  ( gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = '0';
  }
  return currentPlayer;
}

function deriveWinner(gameBoard, players){//95.code cleanup
  let winner ;//91.
  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol){
        winner = players[firstSquareSymbol];//edit 94.
      }
  }
  return winner;
}

function deriveGameBoard(gameTurns){
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];//93.bug fix creating a copy of array

  for(const turn of gameTurns){
      const {square , player} = turn;
      const {row , col } = square;
      gameBoard[row][col] = player;//player symbol
  }
  return gameBoard;
}

function App() {
  const [players , setPlayers] = useState(PLAYERS)
  
  const [gameTurns, setGameTurns] = useState([]);//83. Do not do this
  //const [hasWinner , setHasWinner] = useState(false);//90. You dont need thsi as its redundant
  //const [activePlayer, setActivePlayer] = useState('X');87.Reducing state management

  const activePlayer = derivedActivePlayer(gameTurns)//87.

  //let gameBoard = initalGamerBoard;//85.Deriving state//90.//93.Bug fix for rematch button 
  const gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, players);

  const hasDraw = gameTurns.length ===9 && !winner;//92.


  function handleSelectSquare(rowIndex, colIndex){//82.we want to change player after someone selcts the square
   
    //setActivePlayer((curActivePlayer)=> curActivePlayer === 'X'?'O':'X');//87.
    //curActivePlayer is autmoatically provided here as we learnt
    //setGameTurns();//83. Do not do this as already have it in Gameboard , but we will comment Geamrboard logic as we dont know whcih
    //order its clicked to nake it availbel for Log component

    setGameTurns(prevTurns =>{

      const currentPlayer = derivedActivePlayer(prevTurns)//87.

      const updatedTurns = [{ square : {row:rowIndex , col: colIndex}, player:currentPlayer}
        , ...prevTurns];//84.The latest turn info will be a object use it , and useState will contain array of objects
        //do not use plaer:activeplyaer due to scheduling issue so we added currentPlayer logic
        return updatedTurns;
      });//84.We removed Gameboard logic so we need this   
  }

  function handleRestart(){//93.Reamtch button
    setGameTurns([]);
  }

function handlePlayerNameChange(symbol, newName){//94.
  setPlayers( prevPlayers => {
    return {
      ...prevPlayers, 
      [symbol] : newName
    };
  });
}

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName ={PLAYERS.X} symbol="X" isActive={activePlayer==='X'} onChangeName={handlePlayerNameChange}/>
          <Player initialName ={PLAYERS.O} symbol="O" isActive={activePlayer==='O'} onChangeName={handlePlayerNameChange}/>
        </ol>
      {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
    
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
        </div>
        <Log turns={gameTurns}/>
    </main>
  )
}

export default App
