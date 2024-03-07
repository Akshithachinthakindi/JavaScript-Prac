// console.log(document.body);
// console.dir(document.body);


// let QuerySelEg = document.querySelector("p");  // selects only first "p" tag in the code and doesnt consider other p tags

// console.log(QuerySelEg);

// let Q2Eg = document.querySelectorAll("p"); // this selects all the p tags in the code

// console.log(Q2Eg);

// // if we want to select a class using queryselector then we must use .myclass for class and #myid for selecting id

// console.log(document.querySelector(".myclass"));

// console.log(document.querySelector("#myid"));

const btn = document.querySelector("#btn1");

function random(number) {
    return Math.floor(Math.random() * (number+1));
}

btn.addEventListener("click", () => {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
    document.querySelector("#btn1").textContent = `${rndCol}`;
});

let theme = document.querySelector("#btn2");

let mode = "light";
let body = document.querySelector("body");
let btn2 = document.querySelector("#btn2");



theme.addEventListener("click", () => {
    if(mode === "light") {
        mode = "dark";
        // document.querySelector("body").style.backgroundColor = "purple";
        // document.querySelector("#btn2").textContent = "Click for Light Mode!"
        body.classList.add("dark");
        body.classList.remove("light");
        btn2.textContent = "Click for light mode!"
    } else {
        mode = "light";
        // document.querySelector("body").style.backgroundColor = "white";
        // document.querySelector("#btn2").textContent = "Click for Dark Mode!";
        body.classList.add("light");
        body.classList.remove("dark");
        btn2.textContent = "Click for dark mode!"
        }
    console.log(mode);
});

const button = document.querySelector("#btn2");
const msg = document.querySelector("#hoverMsg");

button.addEventListener('mouseover', () => {
    msg.style.display = 'block';
});

button.addEventListener('mouseout', () => {
    msg.style.display = 'none';
})