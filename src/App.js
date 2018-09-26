import React, { Component } from 'react';
import COLOURS from './Colours';
import ColourButton from './ColourButton';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 class="title">Heather Says...</h1>
          <button class="button button--begin">Begin</button>
          {COLOURS.map(colour => <ColourButton colour={colour.toLowerCase()}/>)}
        <div class="prompt-box" id="prompt-box"></div>
      </div>
    );
  }
}

export default App;
