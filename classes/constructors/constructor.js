class MyClass {

    constructor(name, age) {
        console.log("this is a constructor");
        this.name = name;
        this.age = age;
    }

    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
}

let obj = new MyClass("Akshitha", 20);

console.log(obj);
