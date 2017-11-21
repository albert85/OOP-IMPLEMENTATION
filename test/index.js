// import {Animal,Cat,Dog} from '../src/index.js';
// import {assert} from  'chai';

const {Animal,Cat,Dog} = require('../src/index.js');

const assert = require('chai').assert;

describe('OOP Implementation',()=>{
    describe('handles valid input',()=>{
        it('this should return 4 as the number of leg',()=>{
            assert.deepEqual(Cat.leg,4);
        })
    });


    describe('handles invalid input', () => {

    });



})