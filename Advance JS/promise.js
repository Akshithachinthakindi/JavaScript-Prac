// let promise = new Promise((resolve, reject) => {
//     console.log("i am a promise");  //pending state
//     // resolve("success");
//     reject("some error occured");
// })

// three states in promises

// 1. pending 2. fulfilled 3. rejected 

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data = ", dataId);
//         })
//         resolve("success");
//         if(getNextData) {
//             getNextData();
//         }
//     }, 4000);
// }

// resolve(result)
// reject(error)

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("i am a promise");
        // resolve("success");
        reject("error occured");
    });
};

let promise = getPromise();

promise.then((res) => {
    console.log("successful", res);
});

promise.catch((err) => {
    console.log("rejected", err);
});