import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Harpejji} from './harpejji';
import {String} from './components/String';

class App extends Component {
  constructor(props) {
    super(props);
    this.harpejji = new Harpejji(16);
    this.onPlayNote = this.onPlayNote.bind(this);
  }
  
  onPlayNote(stringIndex, fret) {
    this.harpejji.playNote(stringIndex, fret);
  }

  render() {
    let strings = [];
    
    for(let i = 0; i < this.harpejji.numberOfStrings; i++) {
      let frets = [];
      for(let j = 0; j < 12; j++) {
        frets.push({ string : i, fret : j});
      }
      strings.push(frets);
    }
 
    const links = strings.map((s, i) => <String key={i} index={i} onPlayNote={this.onPlayNote}></String>)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Harpejji</h1>
        </header>
        <p className="App-intro">
          
        </p>
        <table>
          <tbody>
          <tr>
            {links}
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
