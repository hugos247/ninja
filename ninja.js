class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
    }

    sayName () {
        console.log(`The name is ${this.name}`);
    }

    showStats () {
        console.log(`The name is ${this.name}`);
        console.log(`It has ${this.health} health`);
        console.log(`It has ${this.speed} speed`);
        console.log(`It has ${this.strength} strength`);
    }

    drinkSake () {
        this.health += 10;
    }
}


const ninja1 = new Ninja("Hyabusa");
ninja1.drinkSake();
ninja1.showStats();
