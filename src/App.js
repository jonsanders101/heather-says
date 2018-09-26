import React, { Component } from 'react';
import COLOURS from './Colours';
import ColourButton from './ColourButton';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      currentColourDisplayed: null,
      solution: [],
      startButtonText: 'Begin'
    }
    this.beginGame = this.beginGame.bind(this);
  }

  render() {
    return (
      <div className="App">
          <h1 class="title">Heather Says...</h1>
          <button class="button button--begin" onClick={this.beginGame}>{this.state.startButtonText}</button>
          {COLOURS.map(colour => <ColourButton colour={colour.toLowerCase()}/>)}
        <div class="prompt-box">{this.state.currentColourDisplayed}</div>
      </div>
    );
  }
  beginGame() {
    this.setState({...this.state, solution: [this.randomColour()], startButtonText: 'Restart'});
    this.playSolutionSequence();
  }

  playSolutionSequence() {
    let timeout = -1500;
    const timeoutIncrement = 1500;
    this.state.solution.forEach((colour, index) => {
        timeout += timeoutIncrement;
        setTimeout(() => {
            this.setState({...this.state, currentColourDisplayed: colour});
        }, timeout)
    });
      setTimeout(() => {this.setState({...this.state, currentColourDisplayed: null})}, timeout + timeoutIncrement);
  }

  randomColour() {
    return COLOURS[Math.floor(Math.random() * (COLOURS.length))]
  }
}

export default App;
