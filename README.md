# Harpejji
Virtual harpejji using karplus-strong string algorithm

Implementation of a 16 string harpejji (see http://www.marcodi.com) using a modified version of https://github.com/mrahtz/javascript-karplus-strong for sound generation. The modifications are mainly around making the various classes/funtions exportable (though I did make some changes as far as string handling and dealing with some of the magic numbers used). All credit for the sound generation part goes to André Michelle (for the original implementation) and Matthew Rahtz (for the JavaScript port).

## TODO
* Make the interface look more like an actual harpejji (eg, http://www.marcodi.com/harpejji.html) and less like the output of `create-react-app`
* Allow a configurable number of strings (the actual harpejji comes in 12, 16 or 24 string models)
* The legato handling (on individual strings) is a bit weird as the full attack is retriggered. I didn't dive too deeply into the karplus-strong implementation to figure out how to cut part of the attack off. Not having played a real harpejji I'm not not sure how the attack actually gets affected by fret changes on a single string.
* Cleanup the front-end code

## Licence
See the note on the [mrahtz project](https://github.com/mrahtz/javascript-karplus-strong) regarding the licence.
