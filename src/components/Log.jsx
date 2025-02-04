

export default function Log({ turns }){
    //we need to manage dynamicarray for turns here
    //but state was geernated in gameboard so we need to lift the state up to App componetn

    return (<ol id="log">
        {turns.map((turn) => <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player} Selected {turn.square.row},{turn.square.col}
        </li>)}
    </ol>)
}