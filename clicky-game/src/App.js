import React, { Component } from "react";


import Navbar from "./components/navbar";
import Header from "./components/header";
import GameBoard from "./components/gameboard";
import Footer from "./components/footer";

import "./App.css";

class App extends Component {

  render() {
    return (
      <div className="App">
          <Navbar />
          <Header />
          <GameBoard />
          <Footer />
      </div>
    );
  }
}

export default App;