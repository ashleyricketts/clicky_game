import React, { Component } from "react";


import Navbar from "./components/navbar";
import Header from "./components/header";
import GameBoard from "./components/gameboard";
import Footer from "./components/footer";

import "./App.css";

class App extends Component {


  const shuffleArray = (array) => {
    
  }

  render() {
    return (
      <div className="App">
          <Navbar topScore={this.state.topScore} currentScore={this.state.currentScore} status={this.state.result} />
          <Header />
          <GameBoard />
          <Footer />
      </div>
    );
  }
}

export default App;