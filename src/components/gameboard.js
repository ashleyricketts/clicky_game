import React from "react";


const GameBoard = (props) => {
    // debugger;
    return (
    <span id={props.id} value={props.id} onClick={() => props.onClickedPlayer(props.id)}>
      <div class="flex-container"> 
        <img src={props.image} className="db" alt={props.name} />
      </div>
    </span>
  )}

  export default GameBoard; 