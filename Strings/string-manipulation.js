let str = "akShiTha";

let str2 = " Is a good girl";

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());  // removes all the tab spaces before and after the string

// strings are immutable in javascript (means which cannot be changed)
console.log(str.slice(0,5));  // makes a new substring
console.log(str.concat(str2)) // adds 2 strings
console.log(str.replace('i', 'a'));  // replaces i in the string with a
console.log(str.charAt(0)); // prints the char at the given index number for ex- a at 0

