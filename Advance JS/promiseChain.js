function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("Success")
        }, 4000);
    });
};

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("Success")
        }, 6000);
    });
};


console.log("fetching data1 ....");

asyncFunc1().then((res) => {
    console.log(res);
    console.log("fetching data2 ....");
    asyncFunc2().then((res) => {
        console.log(res);
    });
});