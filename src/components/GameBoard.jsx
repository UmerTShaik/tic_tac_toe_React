import { useState } from "react"

const initalGamerBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

export default function GameBoard({onSelectSquare, activePlayerSymbol}) {
    const [gameBoard, setGameBoard] = useState(initalGamerBoard);

    // function handleSelectSquare(rowIndex, colIndex){//82.adding onSelectSquare here as this is triggered wehen user selects it
    //     setGameBoard((prevGameBoard)=> {
    //         const updatedBoard = [...prevGameBoard.map(innerArray =>[...innerArray])]//created brand new array to avaoid below scheduleing issue
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;//prevGameBoard operation on it approach is not recommneded.Please create a copy of old state 
    //         // and then change the copy instead of changing value directly
    //             //due to React scheudle issue during in progress state
    //             //so use UpdatedBoard const
    //         return updatedBoard
    //     });
    // onSelectSquare();
    // }

    return <ol id="game-board">
        {gameBoard.map((row, rowIndex)=> 
        <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => 
                <li key={colIndex}>
                    <button onClick={()=>handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                </li>
                )}
            </ol>
        </li>)}
        
    </ol>
}