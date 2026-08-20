
let priceOfItem = [250, 645, 300, 900, 50];
let finalPrice = [];

// solution using for of loop
let i = 0;
for (let price of priceOfItem) {
    let offer = price * 10 / 100;
    priceOfItem[i] = priceOfItem[i] - offer;
    console.log(`price after offer = ${priceOfItem[i]}`)
    i++;
}
console.log(priceOfItem)

// solution using for loop
for (let i = 0; i < priceOfItem.length; i++) {
    let offer = priceOfItem[i] * 10 / 100;
    priceOfItem[i] = priceOfItem[i] - offer;
    finalPrice.push(priceOfItem[i]);
}

console.log(priceOfItem);
// console.log(finalPrice);

// solution using while loop 
let b = 0;
while (b < priceOfItem.length) {
    let offer = priceOfItem[b] * 10 / 100;
    priceOfItem[b] = priceOfItem[b] - offer;
    b++;
}

console.log(priceOfItem);


// solution using do while loop
let c = 0;
do {
    let offer = priceOfItem[c] * 10 / 100;
    priceOfItem[c] = priceOfItem[c] - offer;
    c++;
} while (c < priceOfItem.length);
console.log(priceOfItem);