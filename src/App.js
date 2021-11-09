import logo from './logo.svg';
import './App.css';
import React from "react";
import {Howl, Howler} from "howler";
import {RangeStepInput} from 'react-range-step-input';
import ReactDOM from "react-dom";


// import the audio files

import Chert21 from "../src/Chert21.mp3";
import Esker21 from "../src/Esker21.mp3";
import Feldspar21 from "../src/Feldspar21.mp3";
import Gabbro21 from "../src/Gabbro21.mp3";
import Prisoner21 from "../src/Prisoner21.mp3";
import Riebek21 from "../src/Riebek21.mp3";
import Solanum21 from "../src/Solanum21.mp3";

// and the ambience files

import campfire from "../src/campfire.mp3";
import rain from "../src/giantsdeep.mp3"
import nature from "../src/crickets.mp3"

// init sound/music files


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


//ambience as well

let sound8;
sound8 = new Howl({
    src: [campfire], loop: true});

let sound9;
sound9 = new Howl({
    src: [rain], loop: true});
let sound10;
sound10 = new Howl({
    src: [nature], loop: true});


// create the states for check boxes

var selectedArray = ["backgroundDefault"];


function App() {
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


    const handleChangeChert = () => {
        setCheckedChert(!checkedChert);
        if (sound2.playing()){
            if(sound1.playing()){
                sound1.pause();
            }
            else{
                sound1.seek(sound2.seek())
                sound1.play();
            }
        }
        else if (sound3.playing()){
            if(sound1.playing()){
                sound1.pause();
            }
            else{
                sound1.seek(sound3.seek())
                sound1.play();
            }
        }

        else if (sound4.playing()){
            if(sound1.playing()){
                sound1.pause();
            }
            else{
                sound1.seek(sound4.seek())
                sound1.play();
            }
        }

        else if (sound5.playing()){
            if(sound1.playing()){
                sound1.pause();
            }
            else{
                sound1.seek(sound5.seek())
                sound1.play();
            }
        }

        else if (sound6.playing()){
            if(sound1.playing()){
                sound1.pause();
            }
            else{
                sound1.seek(sound6.seek())
                sound1.play();
            }
        }

        else if (sound7.playing()){
            if(sound1.playing()){
                sound1.pause();
            }
            else{
                sound1.seek(sound7.seek())
                sound1.play();
            }
        }

        else {
            sound1.playing() ? sound1.pause() : sound1.play();}
    };

    const handleChangeEsker = () => {
        setCheckedEsker(!checkedEsker);
        if (sound1.playing()){
            if(sound2.playing()){
                sound2.pause();
            }
            else{
                sound2.seek(sound1.seek())
                sound2.play();
            }
        }
        else if (sound3.playing()){
            if(sound2.playing()){
                sound2.pause();
            }
            else{
                sound2.seek(sound3.seek())
                sound2.play();
            }
        }

        else if (sound4.playing()){
            if(sound2.playing()){
                sound2.pause();
            }
            else{
                sound2.seek(sound4.seek())
                sound2.play();
            }
        }

        else if (sound5.playing()){
            if(sound2.playing()){
                sound2.pause();
            }
            else{
                sound2.seek(sound5.seek())
                sound2.play();
            }
        }

        else if (sound6.playing()){
            if(sound2.playing()){
                sound2.pause();
            }
            else{
                sound2.seek(sound6.seek())
                sound2.play();
            }
        }

        else if (sound7.playing()){
            if(sound2.playing()){
                sound2.pause();
            }
            else{
                sound2.seek(sound7.seek())
                sound2.play();
            }
        }

        else {
            sound2.playing() ? sound2.pause() : sound2.play();}
    };

    const handleChangeFeldspar = () => {
        setCheckedFeldspar(!checkedFeldspar);
        if (sound2.playing()){
            if(sound3.playing()){
                sound3.pause();
            }
            else{
                sound3.seek(sound2.seek())
                sound3.play();
            }
        }
        else if (sound1.playing()){
            if(sound3.playing()){
                sound3.pause();
            }
            else{
                sound3.seek(sound1.seek())
                sound3.play();
            }
        }

        else if (sound4.playing()){
            if(sound3.playing()){
                sound3.pause();
            }
            else{
                sound3.seek(sound4.seek())
                sound3.play();
            }
        }

        else if (sound5.playing()){
            if(sound3.playing()){
                sound3.pause();
            }
            else{
                sound3.seek(sound5.seek())
                sound3.play();
            }
        }

        else if (sound6.playing()){
            if(sound3.playing()){
                sound3.pause();
            }
            else{
                sound3.seek(sound6.seek())
                sound3.play();
            }
        }

        else if (sound7.playing()){
            if(sound3.playing()){
                sound3.pause();
            }
            else{
                sound3.seek(sound7.seek())
                sound3.play();
            }
        }

        else {
            sound3.playing() ? sound3.pause() : sound3.play();}
    };

    const handleChangeGabbro = () => {
        setCheckedGabbro(!checkedGabbro);
        if (sound2.playing()){
            if(sound4.playing()){
                sound4.pause();
            }
            else{
                sound4.seek(sound2.seek())
                sound4.play();
            }
        }
        else if (sound1.playing()){
            if(sound4.playing()){
                sound4.pause();
            }
            else{
                sound4.seek(sound1.seek())
                sound4.play();
            }
        }

        else if (sound3.playing()){
            if(sound4.playing()){
                sound4.pause();
            }
            else{
                sound4.seek(sound3.seek())
                sound4.play();
            }
        }

        else if (sound5.playing()){
            if(sound4.playing()){
                sound4.pause();
            }
            else{
                sound4.seek(sound5.seek())
                sound4.play();
            }
        }

        else if (sound6.playing()){
            if(sound4.playing()){
                sound4.pause();
            }
            else{
                sound4.seek(sound6.seek())
                sound4.play();
            }
        }

        else if (sound7.playing()){
            if(sound4.playing()){
                sound4.pause();
            }
            else{
                sound4.seek(sound7.seek())
                sound4.play();
            }
        }

        else {
            sound4.playing() ? sound4.pause() : sound4.play();}
    };

    const handleChangePrisoner = () => {
        setCheckedPrisoner(!checkedPrisoner);
        if (sound2.playing()){
            if(sound5.playing()){
                sound5.pause();
            }
            else{
                sound5.seek(sound2.seek())
                sound5.play();
            }
        }
        else if (sound1.playing()){
            if(sound5.playing()){
                sound5.pause();
            }
            else{
                sound5.seek(sound1.seek())
                sound5.play();
            }
        }

        else if (sound3.playing()){
            if(sound5.playing()){
                sound5.pause();
            }
            else{
                sound5.seek(sound3.seek())
                sound5.play();
            }
        }

        else if (sound4.playing()){
            if(sound5.playing()){
                sound5.pause();
            }
            else{
                sound5.seek(sound4.seek())
                sound5.play();
            }
        }

        else if (sound6.playing()){
            if(sound5.playing()){
                sound5.pause();
            }
            else{
                sound5.seek(sound6.seek())
                sound5.play();
            }
        }

        else if (sound7.playing()){
            if(sound5.playing()){
                sound5.pause();
            }
            else{
                sound5.seek(sound7.seek())
                sound5.play();
            }
        }

        else {
            sound5.playing() ? sound5.pause() : sound5.play();}
    };

    const handleChangeRiebek = () => {
        setCheckedRiebek(!checkedRiebek);
        if (sound2.playing()){
            if(sound6.playing()){
                sound6.pause();
            }
            else{
                sound6.seek(sound2.seek())
                sound6.play();
            }
        }
        else if (sound1.playing()){
            if(sound6.playing()){
                sound6.pause();
            }
            else{
                sound6.seek(sound1.seek())
                sound6.play();
            }
        }

        else if (sound3.playing()){
            if(sound6.playing()){
                sound6.pause();
            }
            else{
                sound6.seek(sound3.seek())
                sound6.play();
            }
        }

        else if (sound4.playing()){
            if(sound6.playing()){
                sound6.pause();
            }
            else{
                sound6.seek(sound4.seek())
                sound6.play();
            }
        }

        else if (sound5.playing()){
            if(sound6.playing()){
                sound6.pause();
            }
            else{
                sound6.seek(sound5.seek())
                sound6.play();
            }
        }

        else if (sound7.playing()){
            if(sound6.playing()){
                sound6.pause();
            }
            else{
                sound6.seek(sound7.seek())
                sound6.play();
            }
        }

        else {
        sound6.playing() ? sound6.pause() : sound6.play();}
    };

    const handleChangeSolanum = () => {
        setCheckedSolanum(!checkedSolanum);
        if (sound2.playing()){
            if(sound7.playing()){
                sound7.pause();
            }
            else{
                sound7.seek(sound2.seek())
                sound7.play();
            }
        }
        else if (sound1.playing()){
            if(sound7.playing()){
                sound7.pause();
            }
            else{
                sound7.seek(sound1.seek())
                sound7.play();
            }
        }

        else if (sound3.playing()){
            if(sound7.playing()){
                sound7.pause();
            }
            else{
                sound7.seek(sound3.seek())
                sound7.play();
            }
        }

        else if (sound4.playing()){
            if(sound7.playing()){
                sound7.pause();
            }
            else{
                sound7.seek(sound4.seek())
                sound7.play();
            }
        }

        else if (sound5.playing()){
            if(sound7.playing()){
                sound7.pause();
            }
            else{
                sound7.seek(sound5.seek())
                sound7.play();
            }
        }

        else if (sound6.playing()){
            if(sound7.playing()){
                sound7.pause();
            }
            else{
                sound7.seek(sound6.seek())
                sound7.play();
            }
        }

        else {
            sound7.playing() ? sound7.pause() : sound7.play();}
    };

    const handleChangeFire = () => {
        setCheckedFire(!checkedFire);
        if (sound8.playing()){
            sound8.pause();
        }
        else{
            sound8.play();
        }
    };

    const handleChangeRain = () => {
        setCheckedRain(!checkedRain);
        if (sound9.playing()){
            sound9.pause();
        }
        else{
            sound9.play();
        }
    };

    const handleChangeCrickets = () => {
        setCheckedCrickets(!checkedCrickets);
        if (sound10.playing()){
            sound10.pause();
        }
        else{
            sound10.play();
        }

    };





    const nameArray = ["Solanum", "Riebek", "Prisoner", "Gabbro", "Feldspar", "Esker", "Chert"]







    const clickChert = () => {
        handleChangeChert();
        if (!checkedChert === true){
            selectedArray.push("backgroundChert")
        }
        else {
            selectedArray = selectedArray.filter(function(item) {
                return (item !== "backgroundChert")})
        }
    }

    const clickFeldspar = () => {
        handleChangeFeldspar();
        if (!checkedFeldspar === true){
            selectedArray.push("backgroundFeldspar")
        }
        else {
            selectedArray = selectedArray.filter(function(item) {
                return (item !== "backgroundFeldspar")})
        }
    }

    const clickGabbro = () => {
        handleChangeGabbro();
        if (!checkedGabbro === true){
            selectedArray.push("backgroundGabbro")
        }
        else {
            selectedArray = selectedArray.filter(function(item) {
                return (item !== "backgroundGabbro")})
        }
    }


    const clickPrisoner = () => {
        handleChangePrisoner();
        if (!checkedPrisoner === true){
            selectedArray.push("backgroundPrisoner")
        }
        else {
            selectedArray = selectedArray.filter(function(item) {
                return (item !== "backgroundPrisoner")})
        }
    }


    const clickRiebek = () => {
        handleChangeRiebek();
        if (!checkedRiebek === true){
            selectedArray.push("backgroundRiebek")
        }
        else {
            selectedArray = selectedArray.filter(function(item) {
                return (item !== "backgroundRiebek")})
        }
    }


    const clickSolanum = () => {
        handleChangeSolanum();
        if (!checkedSolanum === true){
            selectedArray.push("backgroundSolanum")
        }
        else {
            selectedArray = selectedArray.filter(function(item) {
                return (item !== "backgroundSolanum")})
        }
    }


    const clickEsker = () => {
        handleChangeEsker();
        if (!checkedEsker === true){
            console.log("Adding Esker")
            selectedArray.push("backgroundEsker")
        }
        else {
            console.log("removing Esker")
            selectedArray = selectedArray.filter(function(item) {
                return (item !== "backgroundEsker")})
        }
        console.log(selectedArray)
    }


    function getBackground() {
        return selectedArray[selectedArray.length - 1]}

    return (
        <div className="whole-div">
            <div className="FlexDiv">
            <div id="top" className="Checkbox">
                    <Checkbox
                        label="Chert"
                        className = "asdf"
                        value={checkedChert}
                        onChange={clickChert}
                    />

                </div>

                <div className="Checkbox">
                    <Checkbox
                        label="Esker"
                        value={checkedEsker}
                        onChange={clickEsker}
                    />
                </div>


            <div className="Checkbox">
                <Checkbox
                    label="Feldspar"
                    value={checkedFeldspar}
                    onChange={clickFeldspar}
                />
            </div>

            <div className="Checkbox">

                <Checkbox
                        label="Gabbro"
                        value={checkedGabbro}
                        onChange={clickGabbro}
                    />
            </div>



            <div className="Checkbox">

                <Checkbox
                    label="Prisoner"
                    value={checkedPrisoner}
                    onChange={clickPrisoner}
                />
            </div>


                <div className="Checkbox">
                <Checkbox
                    label="Riebek"
                    value={checkedRiebek}
                    onChange={clickRiebek}
                />
                </div>

                    <div id="bottom" className="Checkbox">
                <Checkbox
                    label="Solanum"
                    value={checkedSolanum}
                    onChange={clickSolanum}
                />


                    </div>

            <div id = "topAmbience" className="CheckboxAmbience">
                <Checkbox
                    label="Fire"
                    value={checkedFire}
                    onChange={handleChangeFire}
                />
            </div>

            <div id = "middleAmbience" className="CheckboxAmbience">
                <Checkbox
                    label="Rain"
                    value={checkedRain}
                    onChange={handleChangeRain}
                />
            </div>

            <div id = "bottomAmbience"className="CheckboxAmbience">
                <Checkbox
                    label="Crickets"
                    value={checkedCrickets}
                    onChange={handleChangeCrickets}
                />
            </div>
            </div>,
            <div id={getBackground()} className="background"></div>,
            <div className = "info">
                Project by ThrowawayHeights, Art used with permission from Meli-luminati
                <div>
                    <a href="https://meliluminati.carrd.co/" target="_blank">Meli-luminati Website</a>
                    <span> , </span>
                    <a href="https://www.instagram.com/meli.luminati/?hl=en" target="_blank"> Instagram</a>

                    <span> , </span>
                    <a href="https://twitter.com/meliluminati" target="_blank"> Twitter</a>
                    <span> , </span>
                    <a href="https://www.reddit.com/user/Meli-luminati/" target="_blank"> Reddit</a>
                </div>
            </div>
        </div>

    );
};

const Checkbox = ({ label, value, onChange }) => {
    return (
        <label>
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
        </label>
    );
};


export default App;
