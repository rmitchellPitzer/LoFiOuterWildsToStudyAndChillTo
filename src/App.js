import logo from './logo.svg';
import './App.css';
import React from "react";
import {Howl, Howler} from "howler";
import {RangeStepInput} from 'react-range-step-input';
import ReactDOM from "react-dom";

// Above imports the necessary libraries and packages, although howler doesn't seem to be used.



// Imports the sound files from soundFiles.js

import {sound1, sound2, sound3, sound4, sound5, sound6, sound7,
        sound8, sound9, sound10, handleSync} from "./Components/soundFiles";

// Imports the ui elements, like attributes, buttons, and handling the stack

import {Attributes, getBackground, handleStack, SoundButton} from "./Components/UIElements";




// The app!

function App() {
    // create the states for check boxes, by default checkboxes will be unchecked, or "false"
    const [checkedChert, setCheckedChert] = React.useState(false);
    const [checkedEsker, setCheckedEsker] = React.useState(false);
    const [checkedFeldspar, setCheckedFeldspar] = React.useState(false);
    const [checkedGabbro, setCheckedGabbro] = React.useState(false);
    const [checkedPrisoner, setCheckedPrisoner] = React.useState(false);
    const [checkedRiebek, setCheckedRiebek] = React.useState(false);
    const [checkedSolanum, setCheckedSolanum] = React.useState(false);
    const [checkedFire, setCheckedFire] = React.useState(false);
    const [checkedRain, setCheckedRain] = React.useState(false);
    const [checkedCrickets, setCheckedCrickets] = React.useState(false);

    // Massive wall of text for handling audio sync between each instrument.
    // Will refactor this later to be less spaghetti code-y, but right now it works and
    // it's 2 am and I'm tired.
    // UPDATE! It is refactored! No longer 700 lines of code!


    const handleChangeChert = () => {
        setCheckedChert(!checkedChert);
        handleSync(sound1);
        handleStack(checkedChert, "backgroundChert")
    };

    const handleChangeEsker = () => {
        setCheckedEsker(!checkedEsker);
        handleSync(sound2);
        handleStack(checkedEsker, "backgroundEsker")
    };

    const handleChangeFeldspar = () => {
        setCheckedFeldspar(!checkedFeldspar);
        handleSync(sound3);
        handleStack(checkedFeldspar, "backgroundFeldspar")
    };

    const handleChangeGabbro = () => {
        setCheckedGabbro(!checkedGabbro);
        handleSync(sound4);
        handleStack(checkedGabbro, "backgroundGabbro")
    };

    const handleChangePrisoner = () => {
        setCheckedPrisoner(!checkedPrisoner);
        handleSync(sound5);
        handleStack(checkedPrisoner, "backgroundPrisoner")
    };

    const handleChangeRiebek = () => {
        setCheckedRiebek(!checkedRiebek);
        handleSync(sound6);
        handleStack(checkedRiebek, "backgroundRiebek")
    };

    const handleChangeSolanum = () => {
        setCheckedSolanum(!checkedSolanum);
        handleSync(sound7);
        handleStack(checkedSolanum, "backgroundSolanum")
    }

    // ambience files here, these will just be treated like normal sounds, not
    // synced instruments

    const handleChangeFire = () => {
        setCheckedFire(!checkedFire);
        sound8.playing() ? sound8.pause() : sound8.play();
    }

    const handleChangeRain = () => {
        setCheckedRain(!checkedRain);
        sound9.playing() ? sound9.pause() : sound9.play();
    }

    const handleChangeCrickets = () => {
        setCheckedCrickets(!checkedCrickets);
        sound10.playing() ? sound10.pause() : sound10.play();
    }


    return (
        // whole-div covers the entire flex-grid for the buttons
        // flexdiv just covers the buttons inside the flex-grid
        // SoundButtons are each clickable checkboxes to toggle sound on/off
        // getBackground renders the background images. Not sure why it works here but not in UIElements
        // Attributes shows who contributed to the website and their credits.
        <div className="whole-div">
            <div className="FlexDiv">

                <SoundButton
                    label="Chert"
                    value={checkedChert}
                    onChange={handleChangeChert}
                    idString="top"
                    classNameString="Checkbox"/>


                <SoundButton
                    label="Esker"
                    value={checkedEsker}
                    onChange={handleChangeEsker}
                    idString=""
                    classNameString="Checkbox"/>

                <SoundButton
                    label="Feldspar"
                    value={checkedFeldspar}
                    onChange={handleChangeFeldspar}
                    idString=""
                    classNameString="Checkbox"/>

                <SoundButton
                    label="Gabbro"
                    value={checkedGabbro}
                    onChange={handleChangeGabbro}
                    idString=""
                    classNameString="Checkbox"/>

                <SoundButton
                    label="Riebek"
                    value={checkedRiebek}
                    onChange={handleChangeRiebek}
                    idString=""
                    classNameString="Checkbox"/>


                <SoundButton
                    label="Prisoner"
                    value={checkedPrisoner}
                    onChange={handleChangePrisoner}
                    idString=""
                    classNameString="Checkbox"/>

                <SoundButton
                    label="Solanum"
                    value={checkedSolanum}
                    onChange={handleChangeSolanum}
                    idString="bottom"
                    classNameString="Checkbox"/>

                <SoundButton
                    label="Fire"
                    value={checkedFire}
                    onChange={handleChangeFire}
                    idString="topAmbience"
                    classNameString="CheckboxAmbience"/>


                <SoundButton
                    label="Rain"
                    value={checkedRain}
                    onChange={handleChangeRain}
                    idString="middleAmbience"
                    classNameString="CheckboxAmbience"/>

                <SoundButton
                    label="Crickets"
                    value={checkedCrickets}
                    onChange={handleChangeCrickets}
                    idString="bottomAmbience"
                    classNameString="CheckboxAmbience"/>

            </div>,
            <div id={getBackground()} className="background"></div>,
            <Attributes/>
        </div>

    );
};

export default App;