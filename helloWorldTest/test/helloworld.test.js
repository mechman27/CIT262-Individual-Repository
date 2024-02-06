import sayName from '../utils/helloworld.mjs';
import assert from 'assert';

it ('Should return Name', ()=> {
    const nameString = sayName();
    assert.equal(nameString, "Dallas");
})