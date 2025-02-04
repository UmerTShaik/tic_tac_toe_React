import { useState } from "react"



export default function Player({initialName , symbol, isActive, onChangeName}){//82.added active to know whihc player is active
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick(buttonPressed){
        //setIsEditing(!isEditing);//Do not do like this as per React Team.
        setIsEditing((editing) => !editing);//pass a fucntion whcih gets current state and uses it to update th updater functoin
        if(isEditing){
            onChangeName(symbol , playerName);//94.
        }
        
    }

    function handleChange(event){
        setPlayerName(event.target.value);//target means input field
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    
    if(isEditing){
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
    }

    return (
         <li className={isActive ? 'active': undefined}>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save': 'Edit'}</button>
            </li>
    
    )
}