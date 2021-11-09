import React from 'react';
import App from "../App";
import '../App.css';

// stack to push/pop new backgrounds to. classname of background div is set to the top of the stack.
// by default, will have only the default background in the stack.

var selectedArray = ["backgroundDefault"];


// Function to get last element from the stack, the background div will set this function
// as it's classname.

function getBackground() {
    return selectedArray[selectedArray.length - 1]}


// Handles pushing and removing from the arrayselected stack.
// Takes in a state to check and a background string to push onto the stack

function handleStack(state, background){
    if(!state === true){
        selectedArray.push(background);
    }
    else{
        selectedArray = selectedArray.filter(function(item) {
            return (item !== background)})
    }
}

// Creates a checkmark component with a label and value and... it's the buttons!

const SoundButton = ({label, value, onChange, idString, classNameString})  => {
    return (
        <div className={classNameString} id={idString}>
        <label>
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
        </label>
        </div>
    )

}

// Carries the info for who contributed to the website.

// I will also say, huge thank you to Meli-Luminati! Their art really
// Makes this website look and feel so good.

const Attributes = () => {
    return (
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
    )
}


export {getBackground, handleStack, SoundButton, Attributes};

