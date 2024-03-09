class Person {

    constructor(name) {
        this.breath = "breaths";
        this.name = name;
    }

    eat() {
        console.log("eats");
    }
    sleep() {
        console.log("sleeps");
    }
    work() {
        console.log("any work");
    }
}

class Engineer extends Person{

    constructor(name) {
        super(name);
    }

    work() {
        super.eat();
        console.log("codes");
        super.sleep();
    }
}

class Doctor extends Person{

    constructor(name) {
        super(name);
    }

    work() {
        super.eat();
        console.log("treat patients");
        super.sleep();
    }
}

let akshitha = new Engineer("akshitha");

let sathwika = new Doctor("sathwika");
