import React from "react";

const Navbar = (props) => (

    <nav>
        <a href="#" className="home">Clicky Game</a>
        <p className="score">Score: {props.currentScore} </p>
        <p className="topscore">Top Score: {props.topScore} </p>
    </nav>

)

export default Navbar;

