import {getAudioContext} from './karplus-strong/webaudio';
import {GuitarString} from './karplus-strong/guitarstring';

export function Harpejji(numberOfStrings) {
    const audioCtx = getAudioContext();
    const audioDestination = audioCtx.destination;
    this.numberOfStrings = numberOfStrings;
        
    this.strings = [];

    for(let i = 0, count = this.numberOfStrings; i < count; i++) {
        const octave = Math.floor(i/6)+2;
        const fret = i%6*2;
        this.strings.push(new GuitarString(audioCtx, audioDestination, count, i, octave, fret));
    }

    this.playNote = function(string, fret) {
      this.strings[string].pluck(0, 15, fret);
    }
}

