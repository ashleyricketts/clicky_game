import React from "react";


const GameBoard = (props) => {
    // debugger;
    return (
    <span id={props.id} value={props.id} onClick={() => props.onClickedPlayer(props.id)}>
      <article>
        <img src={props.image} className="db" alt={props.name} />
      </article>
    </span>
  )}

  export default GameBoard; 