let food = ["biryani", "chicken", "roast"];
food.unshift("bagara rice","mutton curry"); 

console.log(food.slice(0, 3));


food.splice(4, 1, "Chikku ghee roast", "tandoori chikku");

food.splice(3, 1, "chicken curry"); // replaces

console.log(food);