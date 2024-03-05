let arr = [1,2,3,4,5,6];

const sum = arr.reduce((prev, cur) => {
    return prev+cur;
});

console.log(`sum of the array elements are: ${sum}`);

const MaxNum = arr.reduce((prev, cur) => {
    return prev > cur ? prev : cur;
});

console.log(`largest number in the given array is: ${MaxNum}`);