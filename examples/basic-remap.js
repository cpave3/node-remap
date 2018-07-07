const remap = require('../');
const Log = require('sleek-log')
    , log = new Log();

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

log.info('Input:');
log.json(tobj1);

log.info('Map:');
log.json(tmap1);

log.success('Output:');
log.json(remap(tobj1, tmap1));