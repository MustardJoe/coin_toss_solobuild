import doomFlip from '../src/threesidecoin.js';

const test = QUnit.test;

test('we get one of the possible numbers, lets say, a 3', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = 'three';
    const number = 0.7;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = doomFlip(number);
    
    
    //Assert
    assert.equal(result, expected);
});
