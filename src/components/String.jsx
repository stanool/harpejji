import React, { Component } from 'react';
import {Fret} from './Fret';

export class String extends Component {
    render() {
        const numberOfFrets = 12;
  
        return (
        <td>
          <table>
            <tbody>
                {new Array(numberOfFrets).fill(0).map((x, i) => {
                  return (
                    <tr key={`${this.props.index}-${i}`}>
                    <Fret stringIndex={this.props.index} fretNumber={i} onPlayNote={this.props.onPlayNote}/>
                    </tr>
                  )
                }).reverse()}
                </tbody>
            </table>
        </td>
      );
    }
  }