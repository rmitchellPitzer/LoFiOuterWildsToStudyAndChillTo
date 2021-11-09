import React from 'react';
import App from "../App";


// Imports the sound files

import Chert21 from "../soundfiles/Chert21.mp3";
import Esker21 from "../soundfiles/Esker21.mp3";
import Feldspar21 from "../soundfiles/Feldspar21.mp3";
import Gabbro21 from "../soundfiles/Gabbro21.mp3";
import Prisoner21 from "../soundfiles/Prisoner21.mp3";
import Riebek21 from "../soundfiles/Riebek21.mp3";
import Solanum21 from "../soundfiles/Solanum21.mp3";

// and the ambience files

import campfire from "../soundfiles/campfire.mp3";
import rain from "../soundfiles/giantsdeep.mp3"
import nature from "../soundfiles/crickets.mp3"
import {Howl} from "howler";

// Initializes the sound files to be used

let sound1;
sound1 = new Howl({
    src: [Chert21], loop: true});
let sound2;
sound2 = new Howl({
    src: [Esker21], loop: true});
let sound3;
sound3 = new Howl({
    src: [Feldspar21], loop: true});
let sound4;
sound4 = new Howl({
    src: [Gabbro21], loop: true});
let sound5;
sound5 = new Howl({
    src: [Prisoner21], loop: true});
let sound6;
sound6 = new Howl({
    src: [Riebek21], loop: true});
let sound7;
sound7 = new Howl({
    src: [Solanum21], loop: true});


// don't forget ambience!

let sound8;
sound8 = new Howl({
    src: [campfire], loop: true});
let sound9;
sound9 = new Howl({
    src: [rain], loop: true});
let sound10;
sound10 = new Howl({
    src: [nature], loop: true});


// Creates an array of the sound objects, this way they can be iterated through in handleSync.
// Does not include the ambient sounds, this introduced a bug with sounds not starting.

const soundArray = [sound1, sound2, sound3, sound4, sound5, sound6, sound7];

// Handles playing/pausing for traveler's instruments.
// Basically checks if the sound is playing, stops it, if not it will
// check if any other instruments are playing to get their position and
// play at that position.

function handleSync(currentSound){
    if (currentSound.playing()){
        currentSound.stop();
    }
    else{
        for(let i = 0; i < soundArray.length; i++) {
            if (soundArray[i].playing()) {
                currentSound.seek(soundArray[i].seek());
                currentSound.play();
                return;
            }
        }
        currentSound.play();
    }
}

// Do not know if there's a better way to export than to just, list them all out.

export {sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9, sound10,
        handleSync, }

