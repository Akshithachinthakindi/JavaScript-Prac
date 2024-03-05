let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

arr.shift(); // removing the first ele
console.log(arr);

arr.splice(1, 1, "Ola"); // replacing uber with ola
console.log(arr);

arr.push("Amazon"); // adding amazon at the end 
console.log(arr);