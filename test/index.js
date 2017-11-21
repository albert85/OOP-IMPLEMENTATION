import {Animal,Cat,Dog} from '../src/index.js';
import {assert} from  'chai';

describe('OOP Implementation',()=>{
    describe('handles valid input',()=>{
        it('this should return 4 as the number of leg',()=>{
            assert.deepEqual(Cat.leg,4);
        })
        it('this should return 2 as the number of eyes',()=>{
            assert.deepEqual(Cat.eyes,2);
        })
        it('this should return No  as a message', () => {
            assert.deepEqual(Cat.fin, "No");
        })
    });

    describe('handles invalid input', () => {
        it('this should return a predefined error message', () => {
            assert.deepEqual((new Dog(1)).leg, "Please supply a string");
        })
        it('this should return descriptive error message', () => {
            assert.deepEqual((new Dog([])).leg, "Please supply a string");
        })
        it('this should return predefined descriptive error message', () => {
            assert.deepEqual(Cat.fin, "Please supply a string");
        })
    });
    });



})