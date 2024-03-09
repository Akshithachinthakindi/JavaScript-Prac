// prototypes in javascript

const para = document.querySelector("#para");

const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
};

const akshitha = {
    salary: 90000,
};

akshitha.__proto__ = employee;