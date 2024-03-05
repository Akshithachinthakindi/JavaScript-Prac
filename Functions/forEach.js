let arr = ["chicken biryani", "chicken curry", "bagara rice", "boti curry", "mutton curry"];

// normal method of writing a forEach Function

// arr.forEach(function myfunc(val) {
//     console.log(val);
// });   

// this the arrow method and latest/updated syntax of forEach in javascript

arr.forEach((val, idx, arr) => {
    console.log(val, idx, arr);
});  // latest js developer prefer this syntax over the above one