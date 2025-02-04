


export default function GameBoard({onSelectSquare , board}) {

    
    //const [gameBoard, setGameBoard] = useState(initalGamerBoard);
    //83.Commented below to lift state up as this is not sufficeint for Log component as this doesbnt track who click first and on
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
        {board.map((row, rowIndex)=> 
        <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => 
                <li key={colIndex}>
                    <button onClick={ () => onSelectSquare(rowIndex,colIndex) } 
                    disabled={playerSymbol !== null}>{playerSymbol}</button> 
                    {/* //84.removed anonymous function to lift the state up */}
                </li>
                )}
            </ol>
        </li>)}
        
    </ol>
}