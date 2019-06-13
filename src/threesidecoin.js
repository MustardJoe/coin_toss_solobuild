function doomFlip(number) {
    if(number < 0.33333333) {
        return 'one';
    }
    else if(number > 0.33333333 && number <= 0.66666666) {
        return 'two';
    }
    else {
        return 'three';
    }
}

export default doomFlip;