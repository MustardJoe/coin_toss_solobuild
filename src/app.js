import doomFlip from './threesidecoin.js';

const coinImg = document.getElementById('coin-img');
const doomicornButton = document.getElementById('doomicorn-button');
const rollHeads = document.getElementById('roll-heads');
const rollMiddle = document.getElementById('roll-middle');
const rollTails = document.getElementById('roll-tails');
const rollTotal = document.getElementById('roll-total');
const headChoice = document.getElementById('head-choice');
const gutsChoice = document.getElementById('guts-choice');
const winsDisplay = document.getElementById('wins-display');
const lossesDisplay = document.getElementById('losses-display');
const message = document.getElementById('message');

let counterHeads = 0;
let counterMiddle = 0;
let counterTails = 0;
let counterGlobal = 0;
let wins = 0;
let losses = 0;

doomicornButton.addEventListener('click', () => {
    const randomNumber = Math.random();
    const flip = doomFlip(randomNumber);

    const imageSource = './assets/pic' + flip + 'd3.jpg';
    coinImg.src = imageSource;

    if(flip === 'one') {
        counterHeads++;
        counterGlobal++;
        rollHeads.textContent = counterHeads;
        rollTotal.textContent = counterGlobal;
    }
    if(flip === 'two') {
        counterMiddle++;
        counterGlobal++;
        rollMiddle.textContent = counterMiddle;
        rollTotal.textContent = counterGlobal;
    }
    if(flip === 'three') {
        counterTails++;
        counterGlobal++;
        rollTails.textContent = counterTails;
        rollTotal.textContent = counterGlobal;
    }

    let guess = '';
    if(headChoice.checked) {
        guess = 'one';
    } 
    else if(gutsChoice.checked) {
        guess = 'two';
    }
    else {
        guess = 'three';
    }
    
    //compare guess to coin flip
    const guessedCorrect = flip === guess;
    
    //display message and change based on user selection
    if(guessedCorrect) {
        wins++;
        winsDisplay.textContent = 'Wins: ' + wins;
        message.textContent = 'You won this round... mortal...';
    } 
    else {
        losses++;
        message.textContent = 'You lost, as is to be expected!';
        lossesDisplay.textContent = 'Losses: ' + losses;
    }

//increment wins or losses up


});