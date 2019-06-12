import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import GameBoard from "./components/gameboard";
import Img from "./components/img.json";



const shuffleArray = (array) => {
  let counter = array.length;
  // While there are elements in the array
  while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);
      // Decrease counter by 1
      counter--;
      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }
  return array;
};


  class App extends Component {
  
    state = {
      currentScore: 0,
      topScore: 0,
      result: "",
      clicked: [],
      Img,
      gameOver: false
    };
  
    
    // When a player gets clicked,
    // increase points and add id of element to array.
    recordPoints = (id) => {
      console.log(`Picture clicked with id: ${id}`);
      if(!this.state.clicked.includes(id)){
        this.pointIncrease();
        this.state.clicked.push(id);
        this.setState({
          gameOver: false
        });
      } else {
        this.resetGame();
      }
    }
  
    // When the user makes a new click, increment the points by 1
    // and check if the user has won
    pointIncrease = () => {
      let score = this.state.currentScore + 1;
      console.log(`the score is ${score}`);
      if (score === this.state.Img.length) {
        this.setState({
          result: "You win! Start clicking to play again!",
          topScore: score,
          currentScore: 0,
          clicked: [],
          Img,
          gameOver: false
        });
      } else if (score > this.state.topScore) {
        this.setState({
          topScore: score,
          currentScore: score,
          result: "Correct! New high score!",
        });
      } else {
        this.setState({
          currentScore: score,
          result: "Correct!"
        });
      }
      this.resetImgArray();
    }
  
    // reset the game when the user chooses a duplicate
    resetGame = () => {
      this.setState({
        points: 0,
        currentScore:0,
        topScore: this.state.topScore,
        result: "You Loss!",
        clicked: [],
        Img,
        gameOver: true
      });
      console.log('Game over? ', this.state.gameOver);
      this.resetImgArray();
    }
  
    // set the array to be mapped to a new scrambled version using shuffle algorithm
    resetImgArray = () => {
      let newScramble = shuffleArray(Img);
      this.setState({Img: newScramble})
    }


  render() {
    return (
      <div className="App">
          <Navbar topScore={this.state.topScore} currentScore={this.state.currentScore} status={this.state.result} />
          <Header />
          {this.state.Img.map(card => (
              <GameBoard
                onClickedPlayer={this.recordPoints}
                id={card.id}
                key={card.id}
                image={card.image}
                name={card.name}
              />
            ))}

      </div>
    );
  }
}

export default App;