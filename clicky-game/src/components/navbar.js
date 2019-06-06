import React from "react";

const Navbar = (props) => (

    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">

        <a className="navbar-brand">Clicky Game</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">

            <span className="nav-item score navbar-text">
                Score: {props.currentScore}
            </span>
            <span className="nav-item topscore navbar-text">
                Top Score: {props.topScore}
            </span>
        </div>
    </nav>
    

)

export default Navbar;



