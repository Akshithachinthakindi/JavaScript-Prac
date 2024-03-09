const orange = document.querySelector("#orange");
const purple = document.querySelector("#purple");
const pink = document.querySelector("#pink");

const body = document.querySelector(".container");
const btn = document.querySelector("#choose");


orange.addEventListener("click", () => {
    // body.style.backgroundColor = "orange";
    btn.innerText = "You have clicked Orange!"
    btn.style.backgroundColor = "orange";
});

purple.addEventListener("click", () => {
    // body.style.backgroundColor = "purple";
    btn.innerText = "You have clicked purple!"
    btn.style.backgroundColor = "purple";
});

pink.addEventListener("click", () => {
    // body.style.backgroundColor = "pink";
    btn.innerText = "You have clicked pink!"
    btn.style.backgroundColor = "pink";
});