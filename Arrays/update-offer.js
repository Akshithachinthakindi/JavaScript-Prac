let items = [250,645,300,900,50];

// let i = 0;

// for(let val of items){
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }

for(let i = 0; i <= items; i++) {
    let offer = items/10;
    items[i] = items[i] - offer;
}

console.log(`items values after applying 10% discount individually are: ${items}`);