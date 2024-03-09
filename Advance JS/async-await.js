// const hello = () => {
//     console.log("hello");
// }

// both are same actually lol


// async function hello1() {
//     console.log("hello1");
// }

//  here we are adding async which means it will promise


function api(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data = ", dataId);
            resolve(200);
        }, 2000);
    });
};

// async function getApi() {
//     console.log("fetching data 1..");
//     await api(1);
//     console.log("fetching data 2..");
//     await api(2);
//     console.log("fetching data 3..");
//     await api(3);
//     console.log("fetching data 4..");
//     await api(4);
//     console.log("fetching data 5..");
//     await api(5);
//     console.log("fetching data 6..");
//     await api(6);
// }

// getApi();


(async () => {
    console.log("fetching data 1..");
    await api(1);
    console.log("fetching data 2..");
    await api(2);
    console.log("fetching data 3..");
    await api(3);
    console.log("fetching data 4..");
    await api(4);
    console.log("fetching data 5..");
    await api(5);
    console.log("fetching data 6..");
    await api(6);
}) ();

// above syntax is of iife method (advanced js)















