import doomFlip from './threesidecoin.js'

const coinImg = document.getElementById('coin-img');
const doomicornButton = document.getElementById('doomicorn-button');

doomicornButton.addEventListener('click', () => {
    const randomNumber = Math.random();
    const flip = doomFlip(randomNumber);

    const imageSource = './assets/pic' + flip + 'd3.jpg';
    coinImg.src = imageSource;
    console.log(flip);



});