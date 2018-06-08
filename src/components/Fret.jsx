import React, { Component } from 'react';

export class Fret extends Component {
    constructor(props) {
      super(props);
      this.playNote = this.playNote.bind(this);
    };
  
    playNote() {
        this.props.onPlayNote(this.props.stringIndex, this.props.fretNumber);
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
      <td onClick={this.playNote} onTouchStart={this.playNote}>
        <span className={`fret ${className}`}>{noteName}</span>
      </td>
      );
    }
  }