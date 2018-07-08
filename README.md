# node-remap

node-remap is a utility for transforming objects into new shapes through the use of shape mapping templates.

## How to use it

Remapping objects programatically has never been easier. In order to perform the transformation, you need to know what your input object will look like, and what you want the output to look like, for example:

```
const remap = require('node-remap');

const inputObject = {
    key1: 'John Doe',
    key2: 25,
    key3: {
        key3a: ['cats', 'dogs', 'rabbits']
    }
};

const remapTemplate = {
    name: 'key1',
    age: 'key2',
    animals: 'key3.key3a'
};

const output = remap(inputObject, remapTemplate);
/* const remapTemplate = {
*    name: 'John Doe',
*    age: 25,
*    animals: ['cats', 'dogs', 'rabbits']
*/ };
```

This kind of remapping can be useful for shaping data in order to help it integrate with third party services.