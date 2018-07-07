'use strict';

const chai = require('chai')
    , assert = chai.assert
    , expect = chai.expect
    , _ = require('lodash');

const remap = require('../lib');

describe('Remap function', () => {
    it('should be able to take a structure and a map and return a new object', () => {
        const input = {
            key1: 'value1',
            key2: ['array', 'of', 'values', 1],
            key3: {
                subkey1: 'data',
                subkey2: {
                    subBkey1: 'more data'
                }
            }
        };
        const map = {
            name: 'key1',
            tags: 'key2',
            meta: {
                meta1: 'key3.subkey1',
                meta2: 'key3.subkey2.subBkey1'
            }
        };
        const expectedOutput = {
            name: 'value1',
            tags: ['array', 'of', 'values', 1],
            meta: {
                meta1: 'data',
                meta2: 'more data'
            }
        };
        const remapped = remap(input, map);
        expect(remapped).to.not.be.null;
        expect(remapped).to.be.an('object');
        expect(_.isEqual(remapped, expectedOutput)).to.equal(true);
    });
});