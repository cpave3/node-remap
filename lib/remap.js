const remap = (input, map) => {
    return extract(input, map);
};

const extract = (input, map) => {
    const output = {};
    Object.keys(map).forEach(key => {
        switch (typeof map[key]) {
            case 'string':
                // If we are working with a string it may be a reference, ot static data
                output[key] = map[key].split('.').reduce((object, index) => object[index], input);
                break;  
            case 'array':
            case 'object':
                // because JS thinks Arrays are objects, we need to do another check here
                if (Array.isArray(map[key])) {
                    // Treat as an array
                    // TODO
                } else {
                    // Treat as a real object
                    // If we are working with an object, we need to go down another level of recursion
                    output[key] = extract(input, map[key]);
                }
                break;
            default:
                // Anything else is treated verbatim
                // TODO
                break;
        }
    });
    return output;
};

module.exports = remap;