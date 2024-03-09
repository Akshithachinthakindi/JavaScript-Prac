let DATA = "lmao";

class user {
    constructor (name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data = ", DATA);
    }
}


class Admin extends user {

    constructor(name, email) {
        super(name, email);
    }

    editData() {
        DATA = "edited data";
    }
}

let s1 = new user("akshitha", "akshitha@gmail.com");
let s2 = new user("sathwika", "sathwika@gmail.com");

let t1 = new user("teacher", "teacher@gmail.com");

let a1 = new Admin("admin", "admin@gmail.com");