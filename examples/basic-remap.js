const remap = require('../');

const tobj1 = {
    key1: 'value1',
    key2: {
        subKeyB: {
            keyZ: [1,2,3,4]
        }
    }
};

const tmap1 = {
    name: 'key1',
    value: 'key2.subKeyB.keyZ',
    sub: {
        sub1: 'key1',
        sub2: {
            sub3: 'key1'
        }
    }
};

console.log('Input: ', tobj1, '\r\n');
console.log('Transform map: ', tmap1, '\r\n');
console.log('Result: ', remap(tobj1, tmap1), '\r\n');