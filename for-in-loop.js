let student = {
    name:'akshitha',
    degree:'Btech',
    reg_num:12002408,
    phone:9398329527,
    email:'chinthakindiakshitha@gmail.com',
};

for(let i in student) {
    console.log(i, ": ", student[i]);
}

// we use for in to iterate over an object