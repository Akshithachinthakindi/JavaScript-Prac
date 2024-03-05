let userInput = prompt("Enter a number: ");

let arr = [];

for(let i = 1; i <= userInput; i++) {
    arr[i-1] = i;
}

console.log(arr);

const sum = arr.reduce((prev, cur) => {
    return prev+cur;
});

console.log(`sum of the numbers in the array is: ${sum}`);

const product = arr.reduce((prev, cur) => {
    return prev * cur;
});
console.log(`product of the numbers in the array is: ${product}`);
