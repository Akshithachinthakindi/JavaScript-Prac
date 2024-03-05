//  array map method

const arr = [22, 3, 9, 7];

ans = arr.map((value) => {
    return value * 2;
});

console.log(ans);

// array filter method

const arr2 = [2, 4, 6, 8];

let b = arr2.filter((value) => {
    return value > 5;
});

console.log(b);

// array reduce method

const arr3 = [1,3,5,5,6];
const arr4 = [3,5,6,7,7,8];

let add_meth_func = (a, b) => {
    return a+b;
};

console.log(arr3.reduce(add_meth_func));
console.log(arr4.reduce(add_meth_func));

// array chain method

let arr5 = [1,2,3,4,5];

let a = arr5
        .map((num) => num*2)
        .map((num) => num+1)
        .filter((num) => num >= 2)
        // .reduce((a, b) => a+b);
        
        console.log(a);

const reduce_func = ((a, b) => a+b);

console.log(a.reduce((a, b) => {
    return a+b;
}));