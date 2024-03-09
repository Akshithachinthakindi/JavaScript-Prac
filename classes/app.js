class Parents {
    father() {
        console.log("satyanarayana");
    }
    mother() {
        console.log("srivani");
    }
    setSibling(name) {
        this.sbName = name;
    }
}

let akshitha = new Parents();

akshitha.setSibling("sathwika");

let sathwika = new Parents();

sathwika.setSibling("akshitha");