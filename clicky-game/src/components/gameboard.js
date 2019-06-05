import React from "react";


const GameBoard = (props) => {
    // debugger;
    return (
    <span id={props.id} value={props.id} onClick={() => props.onClickedPlayer(props.id)}>
      <article>
        <img src={props.url} className="db" alt="game-character" />
      </article>
    </span>
  )}

  export default GameBoard; 