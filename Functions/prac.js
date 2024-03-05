// function vowels(str) {
//     let count = 0;
//     for(let ch of str) {
//         if(ch === 'a' || 
//         ch === 'e' || 
//         ch === 'i' ||
//         ch === 'o' || 
//         ch === 'u')
//         {
//             count++;
//         }
//     }
//     return count;
// }

// let val = vowels("harsha vardhan tamarana");

// console.log(val);

const vowels = (str) => {
    let count = 0;
    for(let ch of str) {
        if(ch === 'a' ||
        ch === 'e' ||
        ch === 'i' ||
        ch === 'o' ||
        ch === 'u' ) {
            count++;
        }
    }
    return count;
}

let val = vowels("akshitha");
let val2 = vowels("abcde");
console.log(val);
console.log(val2);