import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Harpejji} from './harpejji';

class Fret extends Component {
  constructor(props) {
    super(props);
    this.playNote = this.playNote.bind(this);
  };

  playNote() {
    this.props.harpejji.playNote(this.props.stringIndex, this.props.fretNumber);
  }

  getNoteName(string, fret) {
    const notes = ['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B'];
    const index = string*2+fret;
    return notes[index%12];
  };
  
  render() {
    const noteName = this.getNoteName(this.props.stringIndex, this.props.fretNumber);
    const className = noteName.length === 1 ? 'light-fret' : 'dark-fret';
    return (
    <td className={className} onClick={this.playNote} onTouchStart={this.playNote}>
      {noteName}
    </td>
    );
  }
}

class String extends Component {
  render() {
    return (
      <td>
        <table>
          <tbody>
              {new Array(12).fill(0).map((x, i) => {
                return (
                  <tr key={`${this.props.index}-${i}`}>
                  <Fret stringIndex={this.props.index} fretNumber={i} harpejji={this.props.harpejji}/>
                  </tr>
                )
              }).reverse()}
              </tbody>
          </table>
      </td>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.harpejji = new Harpejji(16);
  }
    
  render() {
    debugger;
    let strings = [];
    
    for(let i = 0; i < this.harpejji.numberOfStrings; i++) {
      let frets = [];
      for(let j = 0; j < 12; j++) {
        frets.push({ string : i, fret : j});
      }
      strings.push(frets);
    }
 
    const links = strings.map((s, i) => <String key={i} index={i} harpejji={this.harpejji}></String>)
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
