function sum (a, b) {
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
    console.log(a++);
    console.log(b++);
    console.log(a%b);
    console.log(++a);
    console.log(++b);
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b, sum);
}

// calculator(2,3, sum);

calculator(1,2, (a,b) => {
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
    console.log(a++);
    console.log(b++);
    console.log(a%b);
    console.log(++a); 
    console.log(++b);
});

const hello = () => {
    console.log("hello");
}

setTimeout(hello, 3000); // prints hello after 3 sec

// this is also a syntax of callback