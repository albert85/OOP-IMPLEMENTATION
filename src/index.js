export class Animal {
    name = "";
    eyes = 2;
    leg = 0;
    fin = "";

    constructor(name, leg, fin = "No") {
        this.name = name;
        this.leg = leg;
        this.fin = fin;
    }

    eat() {
        if (typeof this.name !== 'string') {
            return "Please supply a string";
        }
        return 'Animal eats'
    }

    sound() {
        if (typeof this.name !== 'string') {
            return "Please supply a string";
        }
        return 'All animals make sound';
    }

    movement() {
        if (typeof this.name !== 'string') {
            return "Please supply a string";
        }
        return 'All animals move'
    }
}


export class Cat extends Animal {

    // creating a constructor for instantiating the class cat
    constructor(name, fin) {
        // inheriting from the parent class
        super(fin);
        // updating the property of Cat class
        this.leg = 4;
        this.name = name;
    }

    // updating a sound method for class cat
    sound() {
        if (typeof this.name !== 'string') {
            return "Please supply a string";
        }
        return `${this.name} meow`;
    }

    // updating a eat method for class cat
    eat() {
        if (typeof this.name !== 'string') {
            return "Please supply a string";
        }
        return `${this.name} drinks milk`
    }

    // updating a movement method for class cat
    movement() {
        if (typeof this.name !== 'string') {
            return "Please supply a string";
        }
        return `${name} walks on land`;
    }
}

export class Dog extends Cat {

    // inheriting from cat class
    constructor(name, leg, fin) {
        super(leg, fin);
        this.name = name;
    }


    //updating dog method from cat class
    sound() {
        if (typeof this.name !== 'string') {
            return "Please supply a string";
        }
        return `${this.name} bark`;
    }

    eat() {
        if (typeof this.name !== 'string') {
            return "Please supply a string";
        }
        return `${this.name} drinks meat`
    }

    movement() {
        if (typeof this.name !== 'string') {
            return "Please supply a string";
        }
        return `${name} walks on land`;
    }
}