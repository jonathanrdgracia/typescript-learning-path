"use strict";
let counter = 0;
class Vehicle {
    constructor(name) {
        counter++;
        this.name = name;
    }
    getName() {
        return `Type: ${this.name} and counter: ${counter}`;
    }
}
const honda = new Vehicle('Civic');
let objecto = {
    name: 'another',
    getName: honda.getName
};
console.log(objecto.getName());
