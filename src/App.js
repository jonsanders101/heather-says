import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 class="title">Heather Says...</h1>
        <button class="button button__begin" id="button__begin">Begin</button>
        <button class="button button__red" id="RED"></button>
        <button class="button button__green"></button>
        <button class="button button__yellow"></button>
        <button class="button button__blue"></button>
        <div class="prompt-box" id="prompt-box"></div>
        <script src="game.js"></script>
        <script src="index.js"></script>
      </div>
    );
  }
}

export default App;
