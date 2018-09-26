import React, { Component } from 'react';
import COLOURS from './Colours';
import ColourButton from './ColourButton';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      currentColourDisplayed: null,
      startButtonText: 'Begin'
    }
    this.beginGame = this.beginGame.bind(this);
    this.colourButtonClickHandler = this.colourButtonClickHandler.bind(this);
    this.nextLevel = this.nextLevel.bind(this);
    this.endGame = this.endGame.bind(this);
  }

  render() {
    return (
      <div className="App">
          <h1 className="title">Heather Says...</h1>
          <button className="button button--begin" onClick={this.beginGame}>{this.state.startButtonText}</button>
          {COLOURS.map((colour, index) => <ColourButton onClick={this.colourButtonClickHandler} colour={colour} key={index}/>)}
        <div className="prompt-box">{this.state.currentColourDisplayed}</div>
      </div>
    );
  }

  beginGame() {
    this.solution = [this.randomColour()];
    this.currentGuess = 0;
    this.setState({...this.state, startButtonText: 'Restart'});
    this.playSolutionSequence();
  }

  endGame() {
    delete this.solution;
    delete this.currentGuess;
    this.setState({...this.state, startButtonText: 'Begin'});
  }

  playSolutionSequence() {
    let timeout = -1500;
    const timeoutIncrement = 1500;
    this.solution.forEach((colour, index) => {
        timeout += timeoutIncrement;
        setTimeout(() => {
            this.setState({...this.state, currentColourDisplayed: colour});
        }, timeout)
    });
      setTimeout(() => {this.setState({...this.state, currentColourDisplayed: null})}, timeout + timeoutIncrement);
  }

  colourButtonClickHandler(e) {
    e.preventDefault();
    if (this.solution[this.currentGuess] === e.target.value) {
      if (++this.currentGuess === this.solution.length) {
        this.nextLevel();
      }
    } else {
      this.endGame();
    }
  }

  nextLevel() {
    this.solution.push(this.randomColour());
    this.currentGuess = 0;
    this.playSolutionSequence();
  }

  randomColour() {
    return COLOURS[Math.floor(Math.random() * (COLOURS.length))]
  }
}

export default App;
