'use strict';

class ImmutableObject {
    constructor(obj) {
        for (let key of Object.keys(obj)) {
            this[key] = obj[key];
        }
        Object.freeze(this);
    }
}

const pet = new ImmutableObject({'type': 'cat', 'name': 'nya'});

console.log(pet.name);
//pet.weight = 42;
//delete pet.type;
//pet.name = 'Naaa';
