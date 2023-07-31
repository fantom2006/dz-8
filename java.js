class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(vehicle) {
        if (!(vehicle instanceof Vehicle)) {
            return "only vehicles are allowed in here!";
        }

        if (this.vehicles.length >= this.capacity) {
            return 'sorry, we are full';
        }

        this.vehicles.push(vehicle);
        return 'Vehicle added';
    }
}

class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

const myGarage = new Garage(3);

const car1 = new Vehicle('Toyota', 'Camry');
const car2 = new Vehicle('Mercedes', 'CLS');

console.log(myGarage.add(car1));
console.log(myGarage.add(car2));
